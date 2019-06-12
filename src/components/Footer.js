import React from "react";
import TMDBLogo from "../image/TMDBLogo.svg";
import githubIcon from "../image/githubIcon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <h2 className="footer-info-item">FOR MOVIE</h2>
        <h3 className="footer-info-item">Adam Czakon &copy;2019</h3>
        <a
          href="https://github.com/adamczakon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-info-icon" src={githubIcon} alt="github" />
        </a>
      </div>
      <div className="footer-credits">
        <a
          href="https://www.themoviedb.org/documentation/api"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credits-link"
        >
          <img
            className="footer-credits-logo"
            src={TMDBLogo}
            alt="Powered by TMDB"
          />
        </a>
      </div>
    </footer>
  );
}
