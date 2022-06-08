import React from "react";
import styles from "./css/Herosection.module.css";

import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.smallText}>Hi, my name is</h3>
      <h1 className={styles.nameText}>Shuaib Ahmed.</h1>

      <h2 className={styles.skillText}>
        <Typewriter
          options={{
            strings: [
              "I build things for web",
              "Mern stack developer",
              "Bug Fixer",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </h2>

      <p className={styles.introText}>
        I am currently pursuing my bachelor of technology, very passionate about
        learning new theology, and recently got my first internship at
        <span className="boldText"> blackcoffer</span>
      </p>

      <a className={styles.button} href="RESUME.pdf" target="_blank">
        Check out my resume !
      </a>
    </section>
  );
};

export default HeroSection;
