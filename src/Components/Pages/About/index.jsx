import Styles from '../../../CSS_Modules/About/index.module.css';
import gStyles from '../../../CSS_Modules/Global/index.module.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className={gStyles.h1}>About Me</h1>
      <p>Hi! I am Leanne Meyer a multilingual developer based in Norway.<br></br>
        I am comfortable working in English, Spanish, French, and Norwegian.<br></br>
        I am passionate about building clean, accessible, and user-friendly interfaces that not only work well, but feel good to use.<br></br><br></br>

During my studies at Noroff, I gained hands-on experience working as both as a Scrum Master and QA tester on collaborative tech projects.<br></br>
This experience taught me the power of good communication, organized teamwork, and testing everything thoroughly (twice, just to be sure!).<br></br>
I enjoy working with technologies like React, JavaScript, TypeScript, Tailwind, MUI, and testing tools like Cypress and Jest.<br></br>
Whether I am styling buttons or squashing bugs, I believe the details matter and I love seeing ideas come to life on screen.<br></br><br></br>

When I am not coding, you'll probably find me exploring coastal views, researching new app or web tool ideas, or looking for my new pet to take in ☕💻</p>

    </div>
  );
}

export default About;