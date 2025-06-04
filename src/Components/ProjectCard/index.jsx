import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import portfolioStyles from "../../CSS_Modules/Portfolio/index.module.css";

const ProjectCard = ({ title, image, link }) => {
  const navigate = useNavigate();

  return (
    <div className={portfolioStyles.cardContainer}>
      <Card
        sx={{
          width: 400,
          maxHeight: 600,

          border: "1px solid #ccc",
          cursor: "pointer",
          overflow: "visible",
          position: "relative",


        }}
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
              "&:hover": {
left: 20,
top: 20,

                transform: "scale(1.8) ",
                position: "absolute",
                  zIndex: 100,
              },

              display: "block",
            }}
          />{" "}
        </div>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
