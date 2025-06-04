import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, image, link }) => {
  const navigate = useNavigate();

return (
    <Card
        sx={{
          width: 300,
          border: "1px solid #ccc",
          cursor: "pointer",
          scale: 1.5,
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.05)" },
          m: 10
        }}
        onClick={() => navigate(link)}
    >
        <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
                maxWidth: 300,
                maxHeight: 200,
                objectFit: "cover",
                margin: "0 auto",
                transition: "transform 0.3s ease-in-out",
               "&:hover": {
        width: "180px",
        height: "150px",
        transform: "scale(1.8)",
        marginTop: "50px",
    },

                display: "block"
            }}
        />
        <CardContent>
            <Typography variant="h6">{title}</Typography>
        </CardContent>
    </Card>
);
};

export default ProjectCard;
