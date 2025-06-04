import ProjectCard from "../../ProjectCard";
import HolidazeMainImage from "../../../assets/Images/HolidazeMainImage.jpg";

const projects = [
  { title: "Holidaze App", image: HolidazeMainImage, link: "/ProjectOne" },
  { title: "Project 2", image: "/images/project2.jpg", link: "/ProjectTwo" },
   { title: "Project 2", image: "/images/project3.jpg", link: "/ProjectThree" },
];

const PortfolioPage = () => {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default PortfolioPage;
