import Styles from '../../../CSS_Modules/About/index.module.css';
import gStyles from '../../../CSS_Modules/Global/index.module.css';
import LanguageImg from '../../../assets/Images/Languages.svg'
import FrameworkImg from '../../../assets/Images/Frameworks.svg'
import StylesImg from '../../../assets/Images/Styling.svg'
import DevopsImg from '../../../assets/Images/Devops.svg'
import BuildImg from '../../../assets/Images/build.svg'
import DatabaseImg from '../../../assets/Images/Database.svg'
import TestsImg from '../../../assets/Images/testing.svg'
import {useState} from 'react';

const About = () => {

    const [flipped, setFlipped] = useState(false);
  return (
<div>
<div className={Styles.comingSoonDiv}>
            <h1 className={gStyles.h1}>COMING SOON</h1>
            </div>

    <div className={Styles.aboutPageDiv}>

        <div>
      <h1 className={gStyles.h1}>About Me</h1>
      <p className={`${gStyles.body} ${Styles.pAbout}`}>Hi! I am Leanne Meyer, a multilingual developer based in Norway.<br></br>
        I am passionate about building clean, accessible, and user-friendly interfaces that not only work well, but feel good to use.<br></br><br></br>
During my studies at Noroff, I gained hands-on experience working as both as a Scrum Master and QA tester on collaborative tech projects.<br></br>
This experience taught me the power of good communication, organized teamwork, and testing everything thoroughly (twice, just to be sure!).<br></br>
I enjoy working with technologies like React, JavaScript, TypeScript, Tailwind, MUI, and testing tools like Cypress and Jest.<br></br><br></br>
Whether I am styling buttons or squashing bugs, I believe the details matter and I love seeing ideas come to life on screen.<br></br><br></br>

When I'm not coding, you'll probably find me exploring coastal views, brainstorming new web or app ideas, fine-tuning past projects (they always have room to grow!), or on the lookout for a new rescue pet to welcome home. ☕💻</p>
</div>

<div className={Styles.techStackDiv}>

 <h2 className={gStyles.h2}>My Tech Stack</h2>
<div className={Styles.allCardsContainer}>

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

      <div className={Styles.cardContainer}   aria-label="Click to view tech stack details" onClick={() => setFlipped(!flipped)}>
        <div className={`${Styles.card} ${flipped ? 'flipped' : ''}`}>
        <div className={`${Styles.cardFront} ${Styles.cardFace}`}>
            <div className={Styles.tapHint}>Tap to flip</div>
        <h3 className={Styles.h3}>Styling & Markup</h3>
        <img src={StylesImg} alt="Styles & Markup" className={Styles.img} />
</div>
<div className={`${Styles.cardBack} ${Styles.cardFace}`}>
        <ul className={gStyles.ul}>
            <li>CSS</li>
            <li>CSS Modules</li>
            <li>MUI</li>
            <li>Tailwind</li>
            <li>Sass</li>
            <li>Bootstrap</li>
            <li>HTML</li>
        </ul>
        </div>
        </div>

    </div>

      <div className={Styles.cardContainer}   aria-label="Click to view tech stack details" onClick={() => setFlipped(!flipped)}>
        <div className={`${Styles.card} ${flipped ? 'flipped' : ''}`}>
        <div className={`${Styles.cardFront} ${Styles.cardFace}`}>
            <div className={Styles.tapHint}>Tap to flip</div>
        <h3 className={Styles.h3}>Frameworks/Libraries</h3>
        <img src={FrameworkImg} alt="Frameworks" className={Styles.img} />
</div>
<div className={`${Styles.cardBack} ${Styles.cardFace}`}>
        <ul className={gStyles.ul}>
            <li>React</li>
            <li>Zustand</li>
            <li>toastr</li>
        </ul>
        </div>
        </div>

    </div>

       <div className={Styles.cardContainer}   aria-label="Click to view tech stack details" onClick={() => setFlipped(!flipped)}>
        <div className={`${Styles.card} ${flipped ? 'flipped' : ''}`}>
        <div className={`${Styles.cardFront} ${Styles.cardFace}`}>
            <div className={Styles.tapHint}>Tap to flip</div>
        <h3 className={Styles.h3}>Tools/Build</h3>
        <img src={BuildImg} alt="Tools" className={Styles.img} />
</div>
<div className={`${Styles.cardBack} ${Styles.cardFace}`}>
        <ul className={gStyles.ul}>
            <li>Vite</li>
            <li>Webpack</li>
             <li>EsLint</li>
              <li>Prettier</li>
        </ul>
        </div>
        </div>

    </div>
       <div className={Styles.cardContainer}   aria-label="Click to view tech stack details" onClick={() => setFlipped(!flipped)}>
        <div className={`${Styles.card} ${flipped ? 'flipped' : ''}`}>
        <div className={`${Styles.cardFront} ${Styles.cardFace}`}>
            <div className={Styles.tapHint}>Tap to flip</div>
        <h3 className={Styles.h3}>Platforms/DevOps</h3>
        <img src={DevopsImg} alt="Platforms" className={Styles.img} />
</div>
<div className={`${Styles.cardBack} ${Styles.cardFace}`}>
        <ul className={gStyles.ul}>
            <li>Netlify</li>
            <li>Vercel</li>
             <li>Github</li>
        </ul>
        </div>
        </div>

    </div>
       <div className={Styles.cardContainer}   aria-label="Click to view tech stack details" onClick={() => setFlipped(!flipped)}>
        <div className={`${Styles.card} ${flipped ? 'flipped' : ''}`}>
        <div className={`${Styles.cardFront} ${Styles.cardFace}`}>
            <div className={Styles.tapHint}>Tap to flip</div>
        <h3 className={Styles.h3}>Databases</h3>
        <img src={DatabaseImg} alt="Databases" className={Styles.img} />
</div>
<div className={`${Styles.cardBack} ${Styles.cardFace}`}>
        <ul className={gStyles.ul}>
            <li>MongoDB</li>

        </ul>
        </div>
        </div>

    </div>
       <div className={Styles.cardContainer}   aria-label="Click to view tech stack details" onClick={() => setFlipped(!flipped)}>
        <div className={`${Styles.card} ${flipped ? 'flipped' : ''}`}>
        <div className={`${Styles.cardFront} ${Styles.cardFace}`}>
            <div className={Styles.tapHint}>Tap to flip</div>
        <h3 className={Styles.h3}>Testing</h3>
        <img src={TestsImg} alt="Testing" className={Styles.img} />
</div>
<div className={`${Styles.cardBack} ${Styles.cardFace}`}>
        <ul className={gStyles.ul}>
            <li>Jest</li>
            <li>Cypress</li>

        </ul>
        </div>
        </div>

    </div>
</div>

</div>
    </div>
    </div>
  );
}

export default About;