import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ProjectStyles from "../../CSS_Modules/Projects/index.module.css";
import globStyles from "../../CSS_Modules/Global/index.module.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const ProjectPageCard = ({
  logoimg,
  title,
  functionText,
  usersText,
  cardImg,
  techStack,
  Additional,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check this out!",
          url: window.location.href,
        })
        .then(() => {
          toastr.success("Link shared successfully!");
        })
        .catch((error) => {
          toastr.error("Oops! Something went wrong while sharing.");
        });
    } else {
      toastr.warning("Sharing is not supported on this browser.");
    }
  };

  return (
    <div className="project-container">
      <Card className={ProjectStyles.projectCard}>
        <CardContent className={ProjectStyles.projectCardContent}>
          <div className={ProjectStyles.projectCardTextDiv}>
            <div className={ProjectStyles.logoH1Div}>
              <img
                src={logoimg}
                alt="Holidaze Logo"
                className={ProjectStyles.HolidazeLogo}
              />
              <h1 className={globStyles.h1}>{title}</h1>
              <IconButton
                onClick={handleShare}
                className={ProjectStyles.shareIcon}
              >
                <ShareIcon className={ProjectStyles.shareIcon}/>
              </IconButton>
              <IconButton
                onClick={handleCopyLink}
                className={ProjectStyles.copyIcon}
              >
                <ContentCopyIcon />
              </IconButton>
            </div>
            <div className={ProjectStyles.TextImageDiv}>
              <div className={ProjectStyles.projectCardDescription}>
                 <h2 className={globStyles.h2}>Function</h2>
                <Typography className={globStyles.body}  component="div">

                  {functionText}
                </Typography>
                  <h3 className={globStyles.h3}>User Stories</h3>
                <Typography className={globStyles.body}  component="div">

                  {usersText}
                </Typography>
                 <h3 className={globStyles.h3}>Additional Details</h3>
                <Typography className={globStyles.body} component="div">

                  {Additional}
                </Typography>

              </div>
              <div className={ProjectStyles.projectCardImgDiv}>
                <img
                  src={cardImg}
                  alt="Holidaze Images"
                  className={ProjectStyles.projectCardImage}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                />

                <Typography
                  variant="div"
                  className="project-tech-stack"
                >
                  <h3
                    sx={{ m: 0 }}
                    className={globStyles.h3}
                  >
                    Tech Stack
                  </h3>
                  <p
                    sx={{ m: 0 }}
                    className={globStyles.body}
                  >
                    {" "}
                    {techStack}{" "}
                  </p>
                </Typography>
                    <div>

      <Link href="https://holidaze-lem.netlify.app/" target="_blank" rel="noopener noreferrer">
      <RocketLaunchIcon fontSize="large" />
        Visit Live Site
      </Link>


      <Link href="https://github.com/lem31/Holidaze-PE2/blob/main/README.md" target="_blank" rel="noopener noreferrer">
       <GitHubIcon fontSize="large" />  View GitHub README
      </Link>
    </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {hovered && (
        <div className={ProjectStyles.cardImgDiv}>
          <img
            src={cardImg}
            alt="Holidaze Images"
            className={ProjectStyles.cardImg}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectPageCard;
