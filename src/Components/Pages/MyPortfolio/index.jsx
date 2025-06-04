import ProjectCard from "../../ProjectCard";
import HolidazeMainImage from "../../../assets/Images/HolidazeMainImage.jpg";
import StoreMainImage from "../../../assets/Images/StoreMainImg.png";
import AuctionMainImage from "../../../assets/Images/AuctionAppMainImg.png";
import ProfileCard from "../../ProfileCard";
import portfolioStyles from "../../../CSS_Modules/Portfolio/index.module.css";

const projects = [
  { title: "Holidaze App", image: HolidazeMainImage, link: "/ProjectOne" },
  { title: "Store App", image: StoreMainImage, link: "/ProjectTwo" },
   { title: "Auction App", image: AuctionMainImage, link: "/ProjectThree" },
];

const PortfolioPage = () => {
  return (
    <div  className={portfolioStyles.portfolioPageDiv}>
    <ProfileCard />


    <div style={{ display: "flex", flexDirection: 'row', gap: "20px", justifyContent: "center", width: "100%", maxWidth:'1260px', flexWrap: 'wrap', paddingTop: "120px", margin:'0 auto' }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
     </div>
  );
};

export default PortfolioPage;
