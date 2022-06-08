import React, { Fragment } from "react";
import "./App.css";

import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

import {
  Navbar,
  HeroSection,
  About,
  Education,
  Work,
  Contact,
} from "./components";

function App() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <About />
      <Education />
      <Work />
      <Contact />
      <footer className="footer">
        <h3>
          Design inspiration from{" "}
          <span className="boldText">Brittany Chiang</span> and Build by
          <span className="boldText">Shuaib Ahmed</span>
        </h3>
        <div>
          <a
            href="https://github.com/Shuaib-Ahmed"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shuaib-ahmed-0962531a6/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/shuaib_.ahmed/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
