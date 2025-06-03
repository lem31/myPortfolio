
/**
 * Footer component renders the footer section of the website.
 * Includes copyright information, navigation links for Github Profile and About and Contact pages
 *
 * @component
 * @returns {JSX.Element} The rendered footer component.
 */
import footerStyles from "../../CSS_Modules/Footer/index.module.css";

function Footer() {

  return (
    <div className={footerStyles.footerDiv}>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.crDiv}>
          <p className={footerStyles.copyRight}>© 2025 Leanne Meyer </p>

        </div>

          <nav className={footerStyles.registerLoginNav}>
            <div className={footerStyles.Ul}>
              <a className={footerStyles.footerA}>
                <img
                  className={footerStyles.navIcons}

                />
                Register
              </a>
              <a  className={footerStyles.footerA}>
                <img
                  className={footerStyles.navIcons}

                />
                Login
              </a>
            </div>
          </nav>


        <div className={footerStyles.smIconsDiv}>
          <img


          />
          <img

          />
          <img

          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;