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
// import MyPortfolio from "../MyPortfolio";
// import ProjectOne from "../ProjectOne";
// import ProjectTwo from "../ProjectTwo";
// import ProjectThree from "../ProjectThree";
// import About from "../About";
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
            {/* <Route
              index
              element={<MyPortfolio />}
            />
            <Route
              path="/ProjectOne"
              element={<ProjectOne />}
            />
            <Route
              path="/ProjectTwo"
              element={<ProjectTwo />}
            />
            <Route
              path="/ProjectThree"
              element={<ProjectThree />}
            />
            <Route
              path="/About"
              element={<About />}
            />
            <Route
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
