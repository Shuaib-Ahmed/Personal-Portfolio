import React from "react";
import styles from "./css/Work.module.css";

import ProjectData from "../utils/ProjectData";

import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const Work = () => {
  return (
    <section id="work" className={styles.container}>
      <h1 className="sectionHeader">
        Personal Projects <span className="line"></span>
      </h1>

      {ProjectData.map((data, index) => {
        // extract data
        const { img_url, name, points, tech_stack, website_url, github_url } =
          data;

        return (
          <article className={styles.projectContainer} key={index}>
            {/* Left Part */}
            <div className={styles.imgContainer}>
              <img src={img_url} alt="Project" />
            </div>

            {/* Right Part */}
            <div className={styles.contentContainer}>
              <h3 className="boldText">Featured Projects</h3>
              <h2>{name}</h2>

              {/* Points */}
              <div className={styles.points}>
                {points.map((point, index) => (
                  <p key={index}>{point}</p>
                ))}
              </div>

              {/* Tech Stack */}
              <div className={styles.tech}>
                {tech_stack.map((stack, index) => (
                  <span key={index}>{stack}</span>
                ))}
              </div>

              {/* Project Links */}
              <div className={styles.links}>
                <span>
                  <a href={website_url} target="_blank" rel="noreferrer">
                    <HiOutlineExternalLink />
                  </a>
                </span>
                <span>
                  <a href={github_url} target="_blank" rel="noreferrer">
                    <FiGithub />
                  </a>
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Work;
