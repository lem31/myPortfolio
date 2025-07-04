/**
 * Router component that sets up the application's routing structure using React Router.
 *
 * @component
 * @returns {JSX.Element} The Router component with defined routes for the application.
 *
 * Routes:
 * - "/" renders the Layout component with nested routes:
 *   - index route renders MyPortfolio
 *   - "/ProjectOne" renders ProjectOne
 *   - "/ProjectTwo" renders ProjectTwo
 *   - "/ProjectThree" renders ProjectThree
 *   - "/About" renders About
 *   - "/Contact" renders Contact
 */

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import PortfolioPage from "../../Components/Pages/MyPortfolio";
import HolidazeProject from "../Pages/ProjectOne";
import EasyBuyStoreApp from "../Pages/ProjectTwo";
import ArtAuctionApp from "../Pages/ProjectThree";
import About from "../Pages/About";
// import Contact from "../Contact";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<PortfolioPage />}
            />
            /*
            <Route
              path="/ProjectOne"
              element={<HolidazeProject />}
            />
            <Route
              path="/ProjectTwo"
              element={<EasyBuyStoreApp />}
            />
            <Route
              path="/ProjectThree"
              element={<ArtAuctionApp />}
            />
            <Route
              path="/About"
              element={<About />}
            />
            {/* <Route
              path="/Contact"
              element={<Contact />}
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
