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

import  { useEffect, useState } from "react";
import hStyles from "../../CSS_Modules/Header/index.module.css";



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
    }, []);

    return (
        <div>
            <div className={hStyles.headerDiv}>
                <header className={hStyles.header}>
                    <div className={hStyles.logoMenuDiv}>
                        <div className={hStyles.logoDiv}>
                            <img  />
                        </div>
                        <div>
                            <button
                                className={hStyles.hamburgerButton}
                                onClick={() => {
                                    setIsMobileNavOpen((prevState) => !prevState);
                                }}
                            >
                                <img />
                            </button>
                        </div>
                    </div>
                    <nav className={hStyles.nav}>
                        <div className={hStyles.navDiv}>
                            <a className={hStyles.navLink} href="/">
                                My Portfolio
                            </a>
                            <a className={hStyles.navLink} href="/About">
                                About
                            </a>
                            <a className={hStyles.navLink} href="/Contact">
                                Contact
                            </a>
                        </div>
                    </nav>
                </header>
            </div>

            {isMobileNavOpen && (
                <div className={hStyles.mobileNavDivBox}>
                    <div
                        className={`${hStyles.mobileNavDiv} ${isMobileNavOpen ? hStyles.active : ""}`}
                    >
                        <nav className={hStyles.mobileNav}>
                            <a className={hStyles.navLink} href="/">
                                Stays
                            </a>
                            <a className={hStyles.navLink} href="/MyPortfolio">
                                My Portfolio
                            </a>
                            <a className={hStyles.navLink} href="/About">
                                About
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
