import { useState } from "react";
import { ContrastIcon } from "./icons/ContrastIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { ServicesIcon } from "./icons/ServicesIcon";
import { CvIcon } from "./icons/CvIcon";
import { PortfolioIcon } from "./icons/PortfolioIcon";
import { BlogIcon } from "./icons/BlogIcon";
import { ContactsIcon } from "./icons/ContactsIcon";

export const NavigationSidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="navigation">
      <div  data-tooltip="Switch Theme" data-flow="top" className="navigation-toggle">
        <ContrastIcon darkMode = { darkMode } onClick = { darkModeToggle }/>
      </div>
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