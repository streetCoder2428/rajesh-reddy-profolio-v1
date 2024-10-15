import React from "react";
import "./myprojects.css";
import Profolio from "../../assets/profolio.png";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Profolio} alt="" />
          </div>
          <h3>My Portfolio(This website)</h3>
          <small className="text-light">ReactJs</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/streetCoder2428/rajesh-reddy-profolio-v1"
              target="_blank"
              rel="noreferrer"
              className="btn">
              Github
            </a>
            <a
              href="https://streetcoder2428.github.io/rajesh-reddy-profolio-v1/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;
