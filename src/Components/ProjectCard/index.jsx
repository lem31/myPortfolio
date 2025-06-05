/**
 * ProjectCard component displays a project as a clickable card with an image, title, and description.
 * On hover, it shows an enlarged image overlay.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the project
 * @param {string} props.image - The image URL for the project
 * @param {string} props.link - The route to navigate to when the card is clicked
 * @param {string} props.description - A short description of the project
 * @returns {JSX.Element} The rendered ProjectCard component
 */
import { useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import portfolioStyles from "../../CSS_Modules/Portfolio/index.module.css";
import globStyles from "../../CSS_Modules/Global/index.module.css";

const ProjectCard = ({ title, image, link, description }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Card
        className={portfolioStyles.projectCard}
        onClick={() => navigate(link)}
      >
        <div className={portfolioStyles.cardMediaDiv}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              width: "100%",
              height: "100%",

              objectFit: "contain",
              margin: "0 auto",
              transition: "transform 0.3s ease-in-out",

              display: "block",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />{" "}
        </div>
        <CardContent>
          <Typography
            className={globStyles.h2}
            sx={{ fontWeight: "500" }}
          >
            {title}
          </Typography>
          <Typography
            className={globStyles.p}
            sx={{ fontWeight: "400" }}
          >
            {" "}
            {description}
          </Typography>
        </CardContent>
      </Card>
      {hovered && (
        <div className={portfolioStyles.cardImgDiv}>
          <img
            src={image}
            alt={title}
            className={portfolioStyles.cardImg}
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;
