/**
 * ArtAuctionApp component displays detailed information about the Art Auction App project,
 * including its features, tech stack, improvements, challenges, and learnings.
 *
 * @component
 * @returns {JSX.Element} The rendered ArtAuctionApp project page.
 */
import ProjectPageCard from "../../ProjectPageCard/index.jsx";

import AuctionAppImages from "../../../assets/Images/AuctionAppImages.png";
import MainImage from "../../../assets/Images/AuctionAppImgMain.png";
import globStyles from "../../../CSS_Modules/Global/index.module.css";
import ProjectStyles from "../../../CSS_Modules/Projects/index.module.css";
import AuctionAppLogo from "../../../assets/Images/AuctionAppLogo.png";
import BidBoxVid from "../../../assets/Videos/BidBoxVid.mov";
import msgImg from "../../../assets/Images/msgImgAuctionApp.png";

const ArtAuctionApp = () => {
  const title = "Art Auction App";
  const functionText =
    "The Art Auction App is a web application allowing users to browse, search, bid on and create auction listings.";
  const usersText =
    "All users can browse Auction listings, view more information on listings and register. Registered users can login, view their profile with an Avatar image, banner image, number of coins they have left to spend and their username. They can also update their profile, create, edit or delete listings, view all their listings and view all bids they've made. They can place bids and view any bids made on listings and the highest current bid, so that they know how much to bid.";
  const Additional =
    "The app is responsive on different screen sizes and also features a search bar and categories, users can select to filter listings";
  const logoimg = AuctionAppLogo;
  const cardImg = AuctionAppImages;
  const techStack =
    " Vite, MUI, Emotion, Tailwind CSS, Post CSS, Prettier, ESLint ";
  const liveSiteLink = "https://art-auction-app-meyer.vercel.app/";
  const readmeLink =
    "https://github.com/lem31/JS2-Semester-Project-2/blob/main/README.md";
  const imageCaptionText =
    "Top Left: Auction Listing card on Home Page, Top Center: Desktop View Home Page, Top Right: Create Listing Form, Bottom Center: Mobile View Home Page";
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
          imageCaptionText={imageCaptionText}
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
            <p>Standardised error handling and removed all alerts.</p>
          </li>
          <li className={ProjectStyles.li}>
            <p>
              Added request caching to some functions to improve performance.
            </p>
          </li>
          <li className={ProjectStyles.li}>
            <p>
              Tried to make the design more appealing and more responsive by
              modifying the header and centering some text which looked out of
              place. The search bar and categories were previously in the body
              but are now in the header and I created a select box for the
              categories on smaller screens. I also modified the layout of the
              auction listings by moving the images to the top of the card
              instead of to the side.
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
            <p>
              Fixed view bids box display on listing page and home page, so that
              it displays just below the view bids button.
            </p>
          </li>

          <div className={ProjectStyles.bidVideoDiv}>
            <video
              className={ProjectStyles.bidVideo}
              src={BidBoxVid}
              autoPlay
              loop
              muted
              controls
            />
          </div>

          <li>
            <p>
              Added highest bid to all listings, so users no where to start
              bidding from.
            </p>
          </li>

          <li>
            <p>Updated notifications using toaster.</p>
          </li>
          <div className={ProjectStyles.msgImgDiv}>
            <img
              src={msgImg}
              alt="Auction App Notifications"
              className={ProjectStyles.msgImg}
            />
          </div>

          <li>
            <p>Should add testing.</p>
          </li>
        </ul>
        <h3
          style={{ margin: 0 }}
          className={globStyles.h3}
        >
          Challenges
        </h3>
        <ul className={ProjectStyles.Ul}>
          <li>
            <p>Learning how to use tailwind effectively. </p>
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
            <p>How to create an auction app with a bidding system.</p>
          </li>
          <li>
            <p>
              How to use Tailwind CSS and implement styles that Tailwind does
              not provide.
            </p>
          </li>
          <li>
            <p>
              That I need to work more on making my design more appealing and
              responsive.
            </p>
          </li>
          <li>
            <p>
              That I need to ensure I use standardised error handling and
              implement caching where possible.
            </p>
          </li>
          <li>
            <p>
              I should also look into type safety in the future, as I have not
              used TypeScript in this project.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ArtAuctionApp;
