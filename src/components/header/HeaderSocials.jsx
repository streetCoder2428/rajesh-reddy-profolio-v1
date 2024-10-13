import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/rajeshreddykuncham/"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/streetCoder2428"
        target="_blank"
        rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://medium.com/@k.rajeshreddy2428"
        target="_blank"
        rel="noreferrer">
        <BsMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
