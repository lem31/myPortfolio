import ProjectPageCard from "../../ProjectPageCard/index.jsx";
import HolidazeLogo from "../../../assets/Images/HolidazeLogo.png";
import HolidazeImages from "../../../assets/Images/HolidazeImages.png";

const HolidazeProject = () => {
  const title = "Holidaze App";
  const description =
    " Holidaze is a travel planning app designed to help users to browse and book stays worldwide. All users can browse, search and filter stays, as well as view stay details without having to register, however, they need to register to make a booking. Users can register as a customer or a venue manager. Customers can login to book stays using a booking calendar and view their bookings on their profile page.  Dates that are unavailable are blocked out in the calendar. Venue managers can browse stays, create listings, view and manage their listings, as well as view any bookings at their venues. All registered users can update their profile avatar and banner on their profile page. The app features a user-friendly interface, secure payment processing, and a review system to enhance the travel experience.";
  const logoimg = HolidazeLogo;
  const cardImg = HolidazeImages;
  const techStack = " React, Vite, Zustand, MUI, Emotion, CSS Modules, React Hook Form, React Router DOM, Yup, Node.js ";
  return (
    <ProjectPageCard
      title={title}
      description={description}
      logoimg={logoimg}
      cardImg={cardImg}
      techStack={techStack}
    />
  );
};
export default HolidazeProject;
