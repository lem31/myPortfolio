/**
 * HolidazeProject component displays detailed information about the Holidaze App project,
 * including its features, user stories, technology stack, improvements, challenges, and learnings.
 *
 * @component
 * @returns {JSX.Element} The rendered HolidazeProject page.
 */
import ProjectPageCard from "../../ProjectPageCard/index.jsx";
import HolidazeLogo from "../../../assets/Images/HolidazeLogo.png";
import HolidazeImages from "../../../assets/Images/HolidazeImages.png";
import MainImage from "../../../assets/Images/MainImageHolidaze.png";
import globStyles from "../../../CSS_Modules/Global/index.module.css";
import ProjectStyles from "../../../CSS_Modules/Projects/index.module.css";
import MsgImg from "../../../assets/Images/UserMessageImg.png";

const HolidazeProject = () => {
  const title = "Holidaze App";
  const functionText =
    " Holidaze is a travel planning app designed to help users to browse and book stays worldwide. ";
  const usersText =
    "All users can browse, search and filter stays, as well as view stay details without having to register, however, they need to register to make a booking. Users can register as a customer or a venue manager. Customers can login to book stays using a booking calendar and view their bookings on their profile page.  Dates that are unavailable are blocked out in the calendar. Venue managers can browse stays, create listings, view and manage their listings, as well as view any bookings at their venues. All registered users can update their profile avatar and banner on their profile page.";
  const Additional =
    " The app features a user-friendly interface, secure payment processing, and a review system to enhance the travel experience.";
  const logoimg = HolidazeLogo;
  const cardImg = HolidazeImages;
  const techStack =
    " React, Vite, Zustand, MUI, Emotion, CSS Modules, React Hook Form, React Router DOM, Yup, Node.js ";

    const readmeLink ="https://github.com/lem31/Holidaze-PE2/blob/main/README.md";
  const liveSiteLink = "https://holidaze-lem.netlify.app/";
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
export default HolidazeProject;
