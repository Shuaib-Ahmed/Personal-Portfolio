import React from "react";
import styles from "./css/Education.module.css";

import { FaUniversity, FaSchool } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionHeader">
        Education<div className="line"></div>
      </h1>

      <VerticalTimeline>
        <VerticalTimelineElement
          className={styles.contentContainer}
          contentStyle={{
            backgroundColor: "var(--primary-text-color)",
            color: "var(--primary-background-color)",
          }}
          contentArrowStyle={{
            borderRight: "10px solid  var(--primary-text-color)",
          }}
          date="2019 - 2023"
          dateClassName={styles.date}
          iconStyle={{
            backgroundColor: "var(--secondary-text-color)",
            color: "#fff",
          }}
          icon={<FaUniversity />}
        >
          <h3>Bachelor Of Technology</h3>
          <h4>B. P. Poddar Institute of Management and Technology</h4>
          <h4>Stream - Computer Science</h4>
          <p>
            <span className="boldText">Score</span> - 9.51 CGPA
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.contentContainer}
          contentStyle={{
            backgroundColor: "var(--primary-text-color)",
            color: "var(--primary-background-color)",
          }}
          contentArrowStyle={{
            borderRight: "10px solid  var(--primary-text-color)",
          }}
          date="2019 - 2023"
          dateClassName={styles.date}
          iconStyle={{
            backgroundColor: "var(--secondary-text-color)",
            color: "#fff",
          }}
          icon={<FaSchool />}
        >
          <h3>Twelfth Grade</h3>
          <h4>The Seventh-day Adventist Sr. Sec. School</h4>
          <h4>Stream - Science</h4>
          <p>
            <span className="boldText">Score</span> - 84.4 Percentage
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.contentContainer}
          contentStyle={{
            backgroundColor: "var(--primary-text-color)",
            color: "var(--primary-background-color)",
          }}
          contentArrowStyle={{
            borderRight: "10px solid  var(--primary-text-color)",
          }}
          date="2019 - 2023"
          dateClassName={styles.date}
          iconStyle={{
            backgroundColor: "var(--secondary-text-color)",
            color: "#fff",
          }}
          icon={<FaSchool />}
        >
          <h3>Tenth Grade</h3>
          <h4>The Seventh-day Adventist Sr. Sec. School</h4>
          <h4>Stream - General</h4>
          <p>
            <span className="boldText">Score</span> - 85.4 Percentage
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Education;
