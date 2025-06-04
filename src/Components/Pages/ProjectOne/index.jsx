
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import HolidazeLogo from '../../../assets/Images/HolidazeLogo.png';
import ProjectCard from '../../ProjectCard';
import ProjectStyles from '../../../CSS_Modules/Projects/index.module.css';
import HolidazeImages from '../../../assets/Images/HolidazeImages.png';

const HolidazeProject = () => {
  return (
    <div className="project-container">
         <Card className={ProjectStyles.projectCard}>
            <CardContent className={ProjectStyles.projectCardContent}>
                <div className={ProjectStyles.projectCardTextDiv}>
        <div className={ProjectStyles.logoH1Div}>
        <img src={HolidazeLogo} alt="Holidaze Logo" className={ProjectStyles.HolidazeLogo} />
          <h1>Holidaze Project</h1>
        </div>
        <div className={ProjectStyles.TextImageDiv}>
            <div className={ProjectStyles.projectCardDescription}>
        <Typography variant="body1" className={ProjectStyles.p}>
          Holidaze is a travel planning app designed to help users plan their vacations with ease. It allows users to create itineraries, manage bookings, and discover new destinations.
        </Typography>
        <Typography variant="body2" className="project-tech-stack">
          <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Material-UI
        </Typography>
        </div>
        <div className={ProjectStyles.projectCardImgDiv}>
            <img src={HolidazeImages} alt="Holidaze Images" className={ProjectStyles.projectCardImage} />
            </div></div></div>


</CardContent>
      </Card>

    </div>
  );
}

export default HolidazeProject;