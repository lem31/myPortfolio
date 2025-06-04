import React from "react";
import { useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import portfolioStyles from "../../CSS_Modules/Portfolio/index.module.css";

const ProjectCard = ({ title, image, link }) => {
  const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);

  return (
    <>
    <Card
      sx={{
        width: '400',
        maxHeight: 600,
        overflow: 'visible',
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
justifyContent: "center",
        alignItems: "center",
        position: "relative",

      }}
      onClick={() => navigate(link)}
       onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
        />{" "}
      </div>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
{hovered && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            width: "50vw",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "20px",
            borderRadius: "10px",
             pointerEvents: "none",
          }}
        >
            <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
)}
</>
  );
};

export default ProjectCard;
