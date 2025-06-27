import Styles from "../../../CSS_Modules/About/index.module.css";
import gStyles from "../../../CSS_Modules/Global/index.module.css";
import LanguageImg from "../../../assets/Images/Languages.svg";
import FrameworkImg from "../../../assets/Images/Frameworks.svg";
import StylesImg from "../../../assets/Images/Styling.svg";
import DevopsImg from "../../../assets/Images/Devops.svg";
import BuildImg from "../../../assets/Images/build.svg";
import DatabaseImg from "../../../assets/Images/Database.svg";
import TestsImg from "../../../assets/Images/testing.svg";

import TechCard from "../../TechCard/index.jsx";

const About = () => {


  return (
    <div>
      <div className={Styles.comingSoonDiv}>
        <h1 className={gStyles.h1}>COMING SOON</h1>
      </div>

      <div className={Styles.aboutPageDiv}>
        <div>
          <h1 className={gStyles.h1}>About Me</h1>
          <p className={`${gStyles.body} ${Styles.pAbout}`}>
            Hi! I am Leanne Meyer, a multilingual developer based in Norway.
            <br></br>I am passionate about building clean, accessible, and
            user-friendly interfaces that not only work well, but feel good to
            use.<br></br>
            <br></br>
            During my studies at Noroff, I gained hands-on experience working as
            both as a Scrum Master and QA tester on collaborative tech projects.
            <br></br>    <br></br>
            This experience taught me the power of good communication, organized
            teamwork, and testing everything thoroughly (twice, just to be
            sure!).<br></br>    <br></br> Take my tech stack cards for a spin to see which technologies I have worked with.<br></br>
            <br></br>
            Whether I am styling buttons or squashing bugs, I believe the
            details matter and I love seeing ideas come to life on screen.
            <br></br>
            <br></br>
            When I'm not coding, you'll probably find me exploring coastal
            views, brainstorming new web or app ideas, fine-tuning past projects
            (they always have room to grow!), or on the lookout for a new rescue
            pet to welcome home. ☕💻
          </p>
        </div>

        <div className={Styles.techStackDiv}>
          <h2 className={gStyles.h2}>My Tech Stack</h2>
          <div className={Styles.allCardsContainer}>
            <TechCard
              title="Languages"
              image={LanguageImg}
              items={["Javascript", "Typescript"]}
              listClassName={Styles.centerUl}
            />

            <TechCard
              title="Styling & Markup"
              image={StylesImg}
              items={[
                "CSS",
                "CSS Modules",
                "MUI",
                "Tailwind",
                "Sass",
                "Bootstrap",
                "HTML",
                "Styled Components",
              ]}
            />

            <TechCard
              title="Frameworks/Libraries"
              image={FrameworkImg}
              items={["React", "Zustand", "toastr"]}
                listClassName={Styles.centerUl}
            />



              <TechCard title="Tools/Build" image={BuildImg} items={["Vite", "Webpack", "EsLint","Prettier"]}   listClassName={Styles.centerUl} />

              <TechCard title="Platforms/DevOps" image={DevopsImg} items={["Netlify", "Vercel", "Github"]}   listClassName={Styles.centerUl} />

              <TechCard title="Databases" image={DatabaseImg} items={["MongoDB"]}   listClassName={Styles.centerUl} />


              <TechCard title="Testing" image={TestsImg} items={["Jest", "Cypress",]}   listClassName={Styles.centerUl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
