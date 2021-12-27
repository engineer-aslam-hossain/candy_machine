import React from "react";
import "./Footer.css";
import fb from "../../assets/images/icons/fb.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import telegram from "../../assets/images/icons/telegram.svg";
import discord from "../../assets/images/icons/discord.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto socialMedia">
            <div className="singleMediaCard mx-auto">
              <a
                href="https://www.instagram.com/baksomaniaofficial/"
                target="blank"
              >
                <img src={instagram} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href="https://www.facebook.com/BaksoManiaNFT" target="blank">
                {" "}
                <img src={fb} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href="https://discord.gg/eV7nS5mRCx" target="blank">
                {" "}
                <img src={discord} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href=" https://twitter.com/BaksoManiaNFT" target="blank">
                {" "}
                <img src={twitter} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href=" https://t.me/Baksomania" target="blank">
                {" "}
                <img src={telegram} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-10 mx-auto copyRight">
            <p>
              Copyright &copy; {new Date().getFullYear()} BAKSOMANIA.COM | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
