import React from "react";
import styles from "./css/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h1 className="sectionHeader">
        Contact Me <div className="line"></div>
      </h1>

      <h3>
        " Hi there, if u have any questions or any freelancing related work then
        please contact me my inbox is alway open and i will try to reach back as
        soon as possible. ""
      </h3>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shuaibahmed8471@gmail.com"
        target="_blank"
        rel="noreferrer"
        className={styles.btn}
      >
        Say Hi!!
      </a>
    </section>
  );
};

export default Contact;
