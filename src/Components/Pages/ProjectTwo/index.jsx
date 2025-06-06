/**
 * HolidazeProject component displays detailed information about the Holidaze App project,
 * including its features, user stories, technology stack, improvements, challenges, and learnings.
 *
 * @component
 * @returns {JSX.Element} The rendered HolidazeProject page.
 */
import ProjectPageCard from "../../ProjectPageCard/index.jsx";

import EasyBuyImages from "../../../assets/Images/EasyBuyImages.png";
import MainImage from "../../../assets/Images/MainImageHolidaze.png";
import globStyles from "../../../CSS_Modules/Global/index.module.css";
import ProjectStyles from "../../../CSS_Modules/Projects/index.module.css";
import MsgImg from "../../../assets/Images/UserMessageImg.png";
import EasyBuyLogo from "../../../assets/Images/EasyBuyLogo.png";

const EasyBuyStoreApp = () => {
  const title = "EasyBuy Store App";
  const functionText =
    " EasyBuy Store App is an e-commerce application for browsing and purchasing products.";
  const usersText =
    "Users can browse product listings, search for products, view more information about individual products and related products, add items to favorites, add items to their cart, and complete purchases.";
  const Additional =
    "The app also features a contact form and a responsive design for optimal viewing on various devices. It also utilizes Zustand for state management, ensuring a smooth user experience.";
  const logoimg = EasyBuyLogo;
  const cardImg = EasyBuyImages;
  const techStack =
    " React, Vite, Zustand, MUI, Emotion, CSS Modules, React Hook Form, React Router DOM, Yup, Node.js, ESLint ";
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
        />
      </div>
      <div className={ProjectStyles.projectPageMainImageDiv}>
        <img
          src={MainImage}
          alt="Holidaze Main"
          className={ProjectStyles.projectPageMainImage}
        />
      </div>

      <div className={ProjectStyles.projectPageTextDiv}>
        <h2 className={globStyles.h2}>Project Reflection/Improvements</h2>
        <h3
          style={{ margin: 0 }}
          className={globStyles.h3}
        >
          Implemented Feedback from Previous Projects
        </h3>
        <ul className={ProjectStyles.Ul}>
          <li className={ProjectStyles.li}>
            {" "}
            <p>
              Created user friendly error/warning/success/alert messages using
              toastr
            </p>
          </li>
        </ul>
        <div className={ProjectStyles.projectPageMsgImgDivBox}>
          <div className={ProjectStyles.projectPageMsgImgDiv}>
            <img
              src={MsgImg}
              alt="Holidaze Messages"
              className={ProjectStyles.projectPageMsgImg}
            />
          </div>
        </div>
        <ul className={ProjectStyles.Ul}>
          <li>
            {" "}
            <p className={`${ProjectStyles.p} ${globStyles.body}`}>
              {" "}
              Improved the design and made it more simple and easy to use.
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
            <p>Listing cards' layout and spacing.</p>
          </li>
          <li>
            <p>Styling and positioning of some elements.</p>
          </li>
          <li>
            <p>Spacing on the profile page.</p>
          </li>
          <li>
            <p>The Venue Availability page' styles and layout need tweaking.</p>
          </li>
          <li>
            <p>Use more branches in the future for different tasks.</p>
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
            <p>Fetching and storing a large amount of data.</p>
          </li>
          <li>
            <p>
              Organizing folders and files when working on a larger project,
              would have used less folders and reorganized if I'd had time.
            </p>
          </li>
          <li>
            <p>Styling MUI components.</p>
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
            <p>How to use Zustand in a larger project.</p>
          </li>
          <li>
            <p>How to use React Hook Form and Yup for form validation.</p>
          </li>
          <li>
            <p>How to use toastr and MUI libraries</p>
          </li>
          <li>
            <p>
              How important it is to keep files and folders organized when
              working on a large project
            </p>
          </li>
          <li>
            <p>
              To always use a separate branch from the development branch for
              each task, the more branches the better.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default EasyBuyStoreApp;
