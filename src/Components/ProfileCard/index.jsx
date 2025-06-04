import profileVideo from '../../assets/Videos/ProfileVidPortfolio.mp4';
import portfolioStyles from '../../CSS_Modules/Portfolio/index.module.css';

const ProfileCard = () => {
  return (
<div className={portfolioStyles.profileVideoDiv}>
<video className={portfolioStyles.video} autoPlay muted src={profileVideo} />
</div>
  );
};

export default ProfileCard;
