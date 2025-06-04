import { useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import portfolioStyles from "../../CSS_Modules/Portfolio/index.module.css";
import globStyles from "../../CSS_Modules/Global/index.module.css";

const ProjectCard = ({ title, image, link }) => {
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
        <Typography className={globStyles.h2} sx={{fontWeight:'500'}} >{title}</Typography>
      </CardContent>
    </Card>
{hovered && (
        <div
          className={portfolioStyles.cardImgDiv}
        >
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
