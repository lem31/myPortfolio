/**
 * HolidazeProject component displays detailed information about the Holidaze App project,
 * including its features, user stories, technology stack, improvements, challenges, and learnings.
 *
 * @component
 * @returns {JSX.Element} The rendered HolidazeProject page.
 */
import ProjectPageCard from "../../ProjectPageCard/index.jsx";

import EasyBuyImages from "../../../assets/Images/EasyBuyImages.png";
import MainImage from "../../../assets/Images/EasyBuyMainImg.png";
import globStyles from "../../../CSS_Modules/Global/index.module.css";
import ProjectStyles from "../../../CSS_Modules/Projects/index.module.css";
import AuctionAppLogo from "../../../assets/Images/AuctionAppLogo.png";
import activeGif from "../../../assets/Images/ActiveStateVid.mov.gif";
import popoutGif from "../../../assets/Images/ShoppingPopoutVid.mov.gif";
import headerVid from "../../../assets/Videos/FixedHeaderVid.mov.mp4";
import favImg from "../../../assets/Images/EasyBuyFavImg.png";


const ArtAuctionApp = () => {
  const title = "Art Auction App";
  const functionText =
    "The Art Auction App is a web application allowing users to browse, search, bid on and create auction listings.";
  const usersText =
    "All users can browse Auction listings, view more information on listings and register. Registered users can login, view their profile with an Avatar image, banner image, number of coins they have left to spend and their username. They can also update their profile, create, edit or delete listings, view all their listings and view all bids they've made. They can place bids and view any bids made on listings and the highest current bid, so that they know how much to bid.";
  const Additional =
    "The app is responsive and also features a search bar and categories, users can select to filter listings";
  const logoimg = AuctionAppLogo;
  const cardImg = AuctionAppImages;
  const techStack =
    " Vite, MUI, Emotion, Tailwind CSS, Post CSS, Prettier, ESLint ";
    const liveSiteLink = "https://art-auction-app-meyer.vercel.app/";
    const readmeLink = "https://github.com/lem31/JS2-Semester-Project-2/blob/main/README.md";
  return (
    <div>
      <div>
        <ProjectPageCard
          title={title}
          logoimg={logoimg}
          cardImg={cardImg}
          techStack={techStack}
          functionText={functionText}
          usersText={usersText}
          Additional={Additional}
            liveSiteLink={liveSiteLink}
            readmeLink={readmeLink}
        />
      </div>
      <div className={ProjectStyles.projectPageMainImageDiv}>
        <img
          src={MainImage}
          alt="EasyBuy Main"
          className={ProjectStyles.projectPageMainImage}
        />
      </div>

      <div className={ProjectStyles.projectPageTextDiv}>
        <h2 className={globStyles.h2}>Project Reflection/Improvements</h2>
        <h3
          style={{ margin: 0 }}
          className={globStyles.h3}
        >
          Implemented Feedback from Tutors
        </h3>
        <ul className={ProjectStyles.Ul}>
          <li className={ProjectStyles.li}>
            {" "}
            <p>
             Cleaned up the code by formatting it properly, removing unnecessary fragments, unused variables, console logs etc.
            </p>
          </li>
            <li className={ProjectStyles.li}>
            <p>
              Added any missing JSDocs and ensured all React keys are stable and unique.
            </p>
            </li>
        </ul>

        <h3
          style={{ margin: 0 }}
          className={globStyles.h3}
        >
          {" "}
          Updates/Improvements
        </h3>
        <ul className={ProjectStyles.Ul}>
          <li>
            <p>Added an active state to all buttons</p>
          </li>
           <div className={ProjectStyles.imgDiv}>
          <img src={activeGif} alt="Active button" />
            </div>
          <li>
            <p>Added a popout effect to shopping cart button to make it more interactive</p>
          </li>
           <div className={ProjectStyles.imgDiv}>
          <img src={popoutGif} alt="Popout shopping cart" />
            </div>
          <li>
            <p>Added a favorites bar and favorite buttons to all listings.</p>
            <div className={ProjectStyles.imgDiv}>
            <img src={favImg} alt="EasyBuy favorite Buttons and bar" />

            </div>
          </li>
          <li>
            <p>Changed header to a fixed header </p>
          </li>
           <div className={ProjectStyles.imgDiv}>
          <video src={headerVid} controls></video>
           </div>

        </ul>
        <h3
          style={{ margin: 0 }}
          className={globStyles.h3}
        >
          Challenges
        </h3>
        <ul className={ProjectStyles.Ul}>
          <li>
            <p>Learning how to use Zustand and getting data to display correctly when setting and retrieving data from the store. </p>
          </li>

        </ul>
        <h3
          style={{ margin: 0 }}
          className={globStyles.h3}
        >
          What I have learned:{" "}
        </h3>
        <ul className={ProjectStyles.Ul}>
          <li>
            <p>How to use Zustand and Zustand middleware.</p>
          </li>
          <li>
            <p>How to use React.</p>
          </li>
          <li>
            <p>How to use MUI components.</p>
          </li>
          <li>
            <p>
              How to make data persist when using Zustand.
            </p>
          </li>

        </ul>
      </div>
    </div>
  );
};
export default ArtAuctionApp;
