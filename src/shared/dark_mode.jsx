import {useState, useEffect} from "react"

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode())

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  // Function to retrieve initial mode from localStorage if available, otherwise defaults to system preference
  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"))
    return savedMode !== null ? savedMode : prefersDarkMode()
  }

  // Function to check if user prefers dark mode based on their system preferences
  function prefersDarkMode() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  }

  // Update localStorage when dark mode changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
  }, [isDarkMode])

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  )
}

export default DarkModeToggle
