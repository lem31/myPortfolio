/**
 * Header component renders the main navigation bar for the portfolio site.
 *
 * Features:
 * - Displays a logo and navigation links.
 * - Responsive hamburger menu for mobile navigation.
 * - Closes mobile navigation when clicking outside the menu.
 *
 * @component
 * @returns {JSX.Element} The rendered Header component.
 */

import { useEffect, useState } from "react";
import hStyles from "../../CSS_Modules/Header/index.module.css";
import globStyles from "../../CSS_Modules/Global/index.module.css";
import Logo from "../../assets/Images/PortfolioLogo.png";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (event) => {
      if (
        !event.target.closest(`.${hStyles.nav}`) &&
        !event.target.closest(`.${hStyles.hamburgerButton}`)
      ) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isMobileNavOpen]);

  return (
    <div>
      <div className={hStyles.headerDiv}>
        <header className={hStyles.header}>
          <div className={hStyles.logoMenuDiv}>
            <div className={hStyles.logoDiv}>
              <img
                src={Logo}
                className={hStyles.logo}
              />
            </div>
            <div>
              <IconButton
                className={hStyles.hamburgerButton}
                onClick={() => {
                  setIsMobileNavOpen((prevState) => !prevState);
                }}
              >
                <MenuIcon className={hStyles.hamburgerButton} />
              </IconButton>
            </div>
          </div>
          <nav className={hStyles.nav}>
            <div className={hStyles.navDiv}>
              <a
                className={`${hStyles.navLink} ${globStyles.links}`}
                href="/"
              >
                My Portfolio
              </a>
              <a
                className={`${hStyles.navLink} ${globStyles.links}`}
                href="/About"
              >
                About
              </a>
              <a
                className={`${hStyles.navLink} ${globStyles.links}`}
                href="/Contact"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>
      </div>

      {isMobileNavOpen && (
        <div
          className={`${hStyles.mobileNavDiv} ${isMobileNavOpen ? hStyles.active : ""}`}
        >
          <Drawer
            anchor="left"
            open={isMobileNavOpen}
            onClose={() => setIsMobileNavOpen(false)}
            className={`${hStyles.mobileNavDiv} ${isMobileNavOpen ? hStyles.active : ""}`}
            sx={{
              "& .MuiPaper-root": { backgroundColor: "rgb(253, 184, 253)" },
            }}
          >
            <List className={hStyles.mobileNav}>
              <ListItem>
                <a
                  className={`${hStyles.navLink} ${globStyles.links}`}
                  href="/"
                >
                  {" "}
                  My Portfolio
                </a>
              </ListItem>
              <ListItem>
                <a
                  className={`${hStyles.navLink} ${globStyles.links}`}
                  href="/About"
                >
                  About
                </a>
              </ListItem>
              <ListItem>
                <a
                  className={`${hStyles.navLink} ${globStyles.links}`}
                  href="/Contact"
                >
                  Contact
                </a>
              </ListItem>
            </List>
          </Drawer>
        </div>
      )}
    </div>
  );
}

export default Header;
