import Styles from '../../../CSS_Modules/About/index.module.css';
import gStyles from '../../../CSS_Modules/Global/index.module.css';
import LanguageImg from '../../../assets/Images/Languages.svg'
import {useState} from 'react';

const About = () => {

    const [flipped, setFlipped] = useState(false);
  return (
<div>
<div className={Styles.comingSoonDiv}>
            <h1 className={gStyles.h1}>COMING SOON</h1>
            </div>

    {/* <div className="about-page">

        <div>
      <h1 className={gStyles.h1}>About Me</h1>
      <p className={gStyles.body}>Hi! I am Leanne Meyer, a multilingual developer based in Norway.<br></br>
        I am passionate about building clean, accessible, and user-friendly interfaces that not only work well, but feel good to use.<br></br><br></br>
During my studies at Noroff, I gained hands-on experience working as both as a Scrum Master and QA tester on collaborative tech projects.<br></br>
This experience taught me the power of good communication, organized teamwork, and testing everything thoroughly (twice, just to be sure!).<br></br>
I enjoy working with technologies like React, JavaScript, TypeScript, Tailwind, MUI, and testing tools like Cypress and Jest.<br></br>
Whether I am styling buttons or squashing bugs, I believe the details matter and I love seeing ideas come to life on screen.<br></br><br></br>

When I'm not coding, you'll probably find me exploring coastal views, brainstorming new web or app ideas, fine-tuning past projects (they always have room to grow!), or on the lookout for a new rescue pet to welcome home. ☕💻</p>
</div>

<div>
<h2>My Tech Stack</h2>

<div>
    <div className={Styles.cardContainer}   aria-label="Click to view tech stack details" onClick={() => setFlipped(!flipped)}>
        <div className={`${Styles.card} ${flipped ? 'flipped' : ''}`}>
        <div className={`${Styles.cardFront} ${Styles.cardFace}`}>
            <div className={Styles.tapHint}>Tap to flip</div>
        <h3 className={Styles.h3}>Languages</h3>
        <img src={LanguageImg} alt="Languages" className={Styles.img} />
</div>
<div className={`${Styles.cardBack} ${Styles.cardFace}`}>
        <ul className={gStyles.ul}>
            <li>JavaScript</li>
            <li>TypeScript</li>
        </ul>
        </div>
        </div>

    </div>
</div>

</div>
    </div> */}
    </div>
  );
}

export default About;