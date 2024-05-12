import { useState, useEffect } from "react";
import { ContrastIcon } from "./icons/ContrastIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { ServicesIcon } from "./icons/ServicesIcon";
import { CvIcon } from "./icons/CvIcon";
import { PortfolioIcon } from "./icons/PortfolioIcon";
import { BlogIcon } from "./icons/BlogIcon";
import { ContactsIcon } from "./icons/ContactsIcon";
import "../styles/utils/_vars.scss";

export const NavigationSidebar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };



  return (
    <div className="navigation">
        <button onClick = { toggleDarkMode } className="navigation-toggle" data-tooltip="Switch Theme" data-flow="top">
          <ContrastIcon />
        </button>
      <nav className="navigation-menu">
        <ul className="navigation-list">
          <li data-tooltip="Home" data-flow="top">
                <a><HomeIcon /></a>
          </li>
          <li data-tooltip="Services" data-flow="top">
                <a><ServicesIcon /></a>
          </li>
          <li data-tooltip="CV" data-flow="top">
                <a><CvIcon /></a>
          </li>
          <li data-tooltip="Portfolio" data-flow="top">
            <a><PortfolioIcon /></a>
          </li>
          <li data-tooltip="Blog" data-flow="top">
            <a><BlogIcon /></a>
          </li>
          <li data-tooltip="Contacts" data-flow="top">
            <a><ContactsIcon /></a>
          </li>
        </ul>
      </nav>
    </div>
  );
}