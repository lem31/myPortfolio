
import ProjectPageCard from '../../ProjectPageCard/index.jsx';
import HolidazeLogo from '../../../assets/Images/HolidazeLogo.png';
import HolidazeImages from '../../../assets/Images/HolidazeImages.png';

const HolidazeProject = () => {

  const title = "Holidaze App";
  const description = " Holidaze is a travel planning app designed to help users plan their vacations with ease. It allows users to create itineraries, manage bookings, and discover new destinations."
const logoimg = HolidazeLogo;
const cardImg = HolidazeImages;
const techStack = "Tech Stack: React, Node.js, Express, MongoDB, MUI";
  return(
<ProjectPageCard title={title} description={description} logoimg={logoimg} cardImg={cardImg} techStack={techStack}/>
  );
};
export default HolidazeProject;