import React, { useState, useEffect } from "react";
import styles from "./css/Navbar.module.css";

import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleLine } from "react-icons/ri";

import { Link } from "react-scroll";

const Navbar = () => {
  const [translate, setTranslate] = useState(
    window.innerWidth <= 556 ? 100 : 0
  );

  const closeNavbar = () => {
    setTranslate(100);
    document.body.style.overflowY = "auto";
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 556) setTranslate(100);
      else setTranslate(0);
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth <= 556) setTranslate(100);
        else setTranslate(0);
      });
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Left */}
      <div className={styles.logo}>
        <h3>SA</h3>
      </div>

      {/* Center */}
      <ul
        className={styles.links}
        style={{ transform: `translateX(${translate}%)` }}
      >
        <li className={styles.closeBtn} onClick={closeNavbar}>
          <RiCloseCircleLine />
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeNavbar}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeNavbar}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeNavbar}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeNavbar}
          >
            Contact
          </Link>
        </li>
        <li>
          <a href="RESUME.pdf" target="_blank" className={styles.resume}>
            Resume
          </a>
        </li>
      </ul>

      {/* Right */}
      <ul className={styles.socials}>
        <li>
          <a
            href="https://github.com/Shuaib-Ahmed"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shuaib-ahmed-0962531a6/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/shuaib_.ahmed/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
      </ul>

      <div
        className={styles.hamburger}
        onClick={() => {
          setTranslate(0);
          document.body.style.overflowY = "hidden";
        }}
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
