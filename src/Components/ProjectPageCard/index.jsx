
import React, {useState} from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ProjectStyles from '../../CSS_Modules/Projects/index.module.css';


const ProjectPageCard = ({ logoimg, title, description, cardImg, techStack }) => {

        const [hovered, setHovered] = useState(false);
  return (
    <div className="project-container">
         <Card className={ProjectStyles.projectCard}>
            <CardContent className={ProjectStyles.projectCardContent}>
                <div className={ProjectStyles.projectCardTextDiv}>
        <div className={ProjectStyles.logoH1Div}>
        <img src={logoimg} alt="Holidaze Logo" className={ProjectStyles.HolidazeLogo} />
          <h1>{title}</h1>
        </div>
        <div className={ProjectStyles.TextImageDiv}>
            <div className={ProjectStyles.projectCardDescription}>
        <Typography variant="body1" className={ProjectStyles.p}>
         {description}
        </Typography>
        <Typography variant="body2" className="project-tech-stack">
   {techStack}
        </Typography>
        </div>
        <div className={ProjectStyles.projectCardImgDiv}>
            <img src={cardImg} alt="Holidaze Images" className={ProjectStyles.projectCardImage}
             onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} />
            </div></div></div>


</CardContent>
      </Card>
{hovered && (
        <div
          className={ProjectStyles.cardImgDiv}
        >
            <img
            src={cardImg}
            alt='Holidaze Images'
            className={ProjectStyles.cardImg}
          />
        </div>
)}
    </div>
  );
}

export default ProjectPageCard;