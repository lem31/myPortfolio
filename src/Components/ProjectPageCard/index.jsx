/**
 * ProjectPageCard component displays detailed information about a project,
 * including logo, title, description, user stories, tech stack, and additional details.
 * It provides options to share or copy the project link, and buttons to visit the live site or view the GitHub README.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.logoimg - URL of the project's logo image
 * @param {string} props.title - Title of the project
 * @param {string} props.functionText - Description of the project's functionality
 * @param {string} props.usersText - User stories or use cases for the project
 * @param {string} props.cardImg - URL of the project's main image
 * @param {string} props.techStack - Technologies used in the project
 * @param {string} props.Additional - Additional details about the project
 * @returns {JSX.Element} The rendered ProjectPageCard component
 */
import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

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
  liveSiteLink, readmeLink,
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
                <ShareIcon className={ProjectStyles.shareIcon} />
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
                <Typography
                  className={globStyles.body}
                  component="div"
                >
                  <h2
                    style={{ margin: 0 }}
                    className={globStyles.h2}
                  >
                    Function
                  </h2>
                  <p className={globStyles.body}> {functionText}</p>
                </Typography>

                <Typography component="div">
                  <h3
                    style={{ margin: 0 }}
                    className={globStyles.h3}
                  >
                    User Stories
                  </h3>
                  <p className={globStyles.body}> {usersText}</p>
                </Typography>

                <Typography
                  className={globStyles.body}
                  component="div"
                >
                  <h3
                    style={{ margin: 0 }}
                    className={globStyles.h3}
                  >
                    Additional Details
                  </h3>
                  <p className={globStyles.body}>{Additional}</p>
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
                <div className={ProjectStyles.projectPageButtonsDiv}>
                  <Button className={ProjectStyles.projectPageButton}>
                    <Link
                      className={globStyles.links}
                      href={liveSiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RocketLaunchIcon
                        className={ProjectStyles.rocketIcon}
                        fontSize="large"
                      />
                      Visit Live Site
                    </Link>
                  </Button>

                  <Button className={ProjectStyles.projectPageButton}>
                    <Link
                      className={globStyles.links}
                      href={readmeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon
                        className={ProjectStyles.githubIcon}
                        fontSize="large"
                      />{" "}
                      View GitHub README
                    </Link>
                  </Button>
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
