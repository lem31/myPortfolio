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
  const [isZoomed, setIsZoomed] = useState(false);
  const [showHint, setShowHint] = useState(true);


  return (
    <>
      <Card
        className={portfolioStyles.projectCard}
        onClick={(e) => {
          if (e.target.tagName !== "IMG") {
            navigate(link);
            window.scrollTo(0, 0);
          }
        }}
      >
        <div className={portfolioStyles.cardMediaDiv}>

            <div className={portfolioStyles.zoomHint}>
              Tap to zoom
            </div>

          <CardMedia

            className={`${portfolioStyles.cardMedia} ${isZoomed ? portfolioStyles.zoomed : ""}`}
            component="img"
            image={image}
            alt={title}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        onClick={(e) => {
    e.stopPropagation();
    setIsZoomed(true);
    if (!isZoomed && !hovered) {
    setShowHint(true);}
  }}



          />
        </div>
        <CardContent>
          <Typography
            className={globStyles.h2}
            sx={{ fontWeight: "500" }}
          >
            {title}
          </Typography>
          <Typography
            className={globStyles.body}
            sx={{ fontWeight: "400" }}
          >
            {description}
          </Typography>
        </CardContent>

      </Card>


      {hovered && (
        <div className={portfolioStyles.cardImgDiv} onClick={(e) =>{e.stopPropagation(); {setIsZoomed(false);
         }}}>
          {showHint && !isZoomed && (
            <div className={portfolioStyles.zoomHint}>
              Tap to zoom
            </div>
          )}
          <img
          onClick={(e) =>{
            e.stopPropagation();
             {setIsZoomed(false);


          }}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            src={image}
            alt={title}
            className={`${portfolioStyles.cardImg} ${isZoomed ? portfolioStyles.zoomed : ""} `}
            style={{ cursor: "pointer" }}

          />

        </div>
      )}
    </>
  );
};

export default ProjectCard;
