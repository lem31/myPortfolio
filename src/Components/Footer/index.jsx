function Footer() {

  return (
    <div className={footerStyles.footerDiv}>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.crDiv}>
          <p className={footerStyles.copyRight}>© 2025 Leanne Meyer </p>

        </div>

          <nav className={footerStyles.registerLoginNav}>
            <div className={footerStyles.Ul}>
              <a className={footerStyles.footerA} href="/Register">
                <img
                  className={footerStyles.navIcons}
                  src={Register}
                  alt="Register icon"
                />
                Register
              </a>
              <a href="/Login" className={footerStyles.footerA}>
                <img
                  className={footerStyles.navIcons}
                  src={Login}
                  alt="Login icon"
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