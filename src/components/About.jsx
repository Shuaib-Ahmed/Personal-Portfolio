import React from "react";
import styles from "./css/About.module.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const About = () => {
  return (
    <section id="about" className={styles.container}>
      {/* Left Part */}
      <article className={styles.leftSection}>
        <h1 className="sectionHeader">
          About Me <div className="line"></div>
        </h1>
        <p>
          Hello! my name is Shuaib who enjoy exploring and learning new
          technology. My interest in web development started when I was in my
          second year of college when covid 19 pandemic hit us out of nowhere as
          we all were in our homes locked inside,I started getting some youtube
          recommendations on HTML and CSS. On one fine day, I clicked on a
          youtube video to learn some basics of HTML and CSS from there my
          self-learning and never-ending journey started.
        </p>

        <p>
          Fast-forward to today, I am doing my first internship at a small
          start-up name blackcoffer. My main focus these days is to build bigger
          projects and I am also trying to learn some new technologies like data
          science and blockchain.
        </p>

        <p>Some of the technology that I have been working with :</p>

        <div className={styles.tecnologys}>
          <div>
            <p>
              <AiOutlineArrowRight /> HTML
            </p>
            <p>
              <AiOutlineArrowRight /> CSS
            </p>
            <p>
              <AiOutlineArrowRight /> JavaScript (ES6)
            </p>
            <p>
              <AiOutlineArrowRight /> React-Js
            </p>
          </div>
          <div>
            <p>
              <AiOutlineArrowRight /> Next-JS
            </p>
            <p>
              <AiOutlineArrowRight /> Node-Js
            </p>
            <p>
              <AiOutlineArrowRight /> Express-Js
            </p>
            <p>
              <AiOutlineArrowRight /> Mongodb
            </p>
          </div>
        </div>
      </article>

      {/* Right Part */}
      <article className={styles.rightSection}>
        <div className={styles.imgContainer}>
          <img src="img/profile.jpeg" alt="My pic" />
        </div>
        <div className={styles.imgOverlay}></div>
        <div className={styles.imgFrame}></div>
      </article>
    </section>
  );
};

export default About;
