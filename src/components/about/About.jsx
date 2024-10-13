import React from "react";
import "./about.css";
import myImage from "../../assets/exp-me.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Masters Degree</h5>
              <small>
                MSc.(Hons) Computer & Information Technology <br />
                <i>Elmhurst University.(United States, IL)</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <small>3.87</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>1. Telecom</li>
                  <li>2. Health Care</li>
                  <li>3. Quantum Key Distribution Network(QKDN)</li>
                </ul>
              </small>
            </article>
          </div>
        </div>
      </div>
      <div className="container about__content">
        <p>
          I am a dedicated web developer with over 4.5+ years of professional
          experience in software engineering, specializing in both front-end and
          back-end development. I have worked extensively in the healthcare and
          telecommunications industries, as well as on Quantum Key Distribution
          Network (QKDN) projects, where I gained strong expertise in
          technologies such as Angular (versions 2 to 14+), ReactJS, NodeJS,
          JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Mantine, and Sass.
          With a solid understanding of the software development lifecycle
          (SDLC) and Agile methodologies, I have led development efforts on
          large-scale projects, collaborating closely with cross-functional
          teams to ensure the seamless integration of design and functionality.
          I am proficient with tools such as Jenkins, Maven, Swagger, and AWS,
          and I take pride in my problem-solving abilities and communication
          skills. Currently working as a Software Engineer II, I hold a Master’s
          in Computer and Information Technology with a GPA of 3.89/4.0,
          alongside a Bachelor’s degree in Mechanical Engineering.
        </p>
      </div>
    </section>
  );
};

export default About;
