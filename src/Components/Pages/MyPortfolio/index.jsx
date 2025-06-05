

/**
 * PortfolioPage component displays a portfolio section with a profile card and a list of project cards.
 *
 * @component
 * @returns {JSX.Element} The rendered portfolio page with profile and project cards.
 */

import ProjectCard from "../../ProjectCard";
import HolidazeMainImage from "../../../assets/Images/HolidazeMainImage.jpg";
import StoreMainImage from "../../../assets/Images/StoreMainImg.png";
import AuctionMainImage from "../../../assets/Images/AuctionAppMainImg.png";
import ProfileCard from "../../ProfileCard";
import portfolioStyles from "../../../CSS_Modules/Portfolio/index.module.css";
import globStyles from "../../../CSS_Modules/Global/index.module.css";

const projects = [
  { title: "Holidaze App", image: HolidazeMainImage, link: "/ProjectOne", description: "Browse and book holiday stays with ease. Built for seamless travel planning." },
  { title: "Store App", image: StoreMainImage, link: "/ProjectTwo", description: "A sleek e-commerce hub for shopping lovers. Discover products & shop effortlessly" },
  { title: "Auction App", image: AuctionMainImage, link: "/ProjectThree", description:
"Place your bids or create your own auction listing and instantly embrace the rush of live auctions." },
];

const PortfolioPage = () => {
  return (
    <div  className={portfolioStyles.portfolioPageDiv}>
        <div className={portfolioStyles.profileCardH1Div}>
    <ProfileCard />

<div className={portfolioStyles.portfolioTitleDiv}>
    <h1 className={globStyles.h1}>Portfolio</h1>

 <p className={globStyles.body}> Welcome to my portfolio! Here, you can explore some of the projects I've worked on.
    Each project showcases my skills and creativity as a developer.
    Click on any project card title to learn more about it.</p>
    </div>
    </div>



    <div style={{ display: "flex", flexDirection: 'row', gap: "20px", justifyContent: "center", width: "100%", maxWidth:'1260px', flexWrap: 'wrap', paddingTop: "120px", margin:'0 auto' }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
     </div>
  );
};

export default PortfolioPage;
