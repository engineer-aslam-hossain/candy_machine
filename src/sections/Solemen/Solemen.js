import React from "react";
import "./Solemen.css";
import solemen from "../../assets/images/solemen.png";

const Solemen = () => {
  return (
    <section className="solemen" id="solemen">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 soleman_org d-flex flex-column align-items-center "
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="500"
          >
            <img src={solemen} alt="solemen" className="img-fluid" />
            <a href="https://www.solemen.org" target="blank">
              www.solemen.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solemen;
