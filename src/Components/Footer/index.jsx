/**
 * Footer component renders the footer section of the website.
 * Includes copyright information, navigation links for Github Profile and About and Contact pages
 *
 * @component
 * @returns {JSX.Element} The rendered footer component.
 */

import footerStyles from "../../CSS_Modules/Footer/index.module.css";
import globStyles from "../../CSS_Modules/Global/index.module.css";
import githubIcon from "../../assets/Images/GithubIcon.png";

function Footer() {
  return (
    <div className={footerStyles.footerDiv}>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.crDiv}>
          <p className={`${footerStyles.copyRight}${globStyles.links}`}>
            © 2025 Leanne Meyer{" "}
          </p>
        </div>
        <div className={footerStyles.githubDiv}>
          <a
            className={footerStyles.githubLink}
            href="https://github.com/lem31"
          >
            <img
              className={footerStyles.navIcons}
              src={githubIcon}
            />
          </a>
        </div>

        <nav className={footerStyles.Nav}>
          <div className={footerStyles.Ul}>
            <a className={globStyles.links}>About</a>
            <a className={globStyles.links}>Contact</a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
