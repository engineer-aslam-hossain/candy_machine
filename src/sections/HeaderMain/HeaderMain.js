import React, { useEffect, useState } from "react";
import "./HeaderMain.css";
import bannerImg from "../../assets/images/banner_bakso.png";
import bg from "../../assets/images/bg.png";

const HeaderMain = () => {
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    setDeviceWidth(width);
  }, []);

  return (
    <section className="headerMain">
      <div className="container">
        <div className="bannerImg">
          <img
            src={deviceWidth > 768 ? bannerImg : bg}
            alt="bannerImg"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
