import React, { useState } from "react";
import DribbbleIcon from "./icons/DribbbleIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import SkillsIcon from "./icons/SkillsIcon";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import ProgressLine from "./progress-line";
import DownloadIcon from "./icons/DownloadIcon";

function InfoSidebar() {
  const isOnline = true;
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      const fileNotFound = Math.random() < 0.5;
      if (fileNotFound) {
        alert("File not found. Please try again later.");
      } else {
        const cvUrl = "/cv.pdf";
        window.open(cvUrl, "_blank");
      }
    }, 500);
  };

  return (
    <div className="info-sidebar">
      <div className="info-sidebar__img">
        <img src="/src/assets/img/sidebar-info/profile.png" alt="User" />
        {isOnline && <div className="online-dot"></div>}
      </div>
      <h2 className="info-sidebar__name">Rayan Adlardard</h2>
      <p className="info-sidebar__profession">Front-end Developer</p>
      <div className="info-sidebar-social">
        <a className="info-sidebar-social__icon" href="/">
          <FacebookIcon />
        </a>
        <a className="info-sidebar-social__icon" href="/">
          <InstagramIcon />
        </a>
        <a className="info-sidebar-social__icon" href="/">
          <TwitterIcon />
        </a>
        <a className="info-sidebar-social__icon" href="/">
          <LinkedinIcon />
        </a>
        <a className="info-sidebar-social__icon" href="/">
          <YoutubeIcon />
        </a>
        <a className="info-sidebar-social__icon" href="/">
          <DribbbleIcon />
        </a>
      </div>
      <div className="info-sidebar-date">
        <div className="info-sidebar-date__group">
          <p className="info-sidebar-date__title">Age:</p>
          <p className="info-sidebar-date__desc">24</p>
        </div>
        <div className="info-sidebar-date__group">
          <p className="info-sidebar-date__title">Residence:</p>
          <p className="info-sidebar-date__desc">BD</p>
        </div>
        <div className="info-sidebar-date__group">
          <p className="info-sidebar-date__title">Freelance:</p>
          <p className="info-sidebar-date__desc c-secondary">Available</p>
        </div>
        <div className="info-sidebar-date__group">
          <p className="info-sidebar-date__title">Address:</p>
          <p className="info-sidebar-date__desc">Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="info-sidebar-skills">
        <h5 className="info-sidebar-skills__title">Languages</h5>
        <div className="info-sidebar-skills__group">
          <ProgressLine title="Bangla" percentage={100} />
          <ProgressLine title="English" percentage={80} />
          <ProgressLine title="Spanish" percentage={60} />
        </div>
      </div>
      <div className="info-sidebar-skills">
        <h5 className="info-sidebar-skills__title">Skills</h5>
        <div className="info-sidebar-skills__group">
          <ProgressLine title="HTML" percentage={90} />
          <ProgressLine title="CSS" percentage={85} />
          <ProgressLine title="JavaScript" percentage={90} />
          <ProgressLine title="PHP" percentage={75} />
          <ProgressLine title="WordPress" percentage={85} />
        </div>
      </div>
      <div className="info-sidebar-skills">
        <h5 className="info-sidebar-skills__title">Extra Skills</h5>
        <div className="info-sidebar-extra-skills">
          <div className="info-sidebar-extra-skills__desc">
            <SkillsIcon /> Bootstrap, Materialize
          </div>
          <div className="info-sidebar-extra-skills__desc">
            <SkillsIcon /> Stylus, Sass, Less
          </div>
          <div className="info-sidebar-extra-skills__desc">
            <SkillsIcon /> Gulp, Webpack, Grunt
          </div>
          <div className="info-sidebar-extra-skills__desc">
            <SkillsIcon /> GIT Knowledge
          </div>
        </div>
      </div>
      <button className="download-cv-btn" onClick={handleDownload}>
        {isDownloading ? "Downloading..." : "Download CV"} <DownloadIcon />
      </button>
    </div>
  );
}

export default InfoSidebar;
