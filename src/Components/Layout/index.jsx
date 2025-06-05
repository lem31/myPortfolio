/**
 * Layout component is a wrapper for the application's layout structure.
 * It uses React Router's Outlet component to render child routes dynamically.
 *
 * @component
 * @returns {JSX.Element} The layout structure containing child routes.
 */

import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


function Layout() {
  return (
    <div >
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;