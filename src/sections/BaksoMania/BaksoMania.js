import React from "react";
import "./BaksoMania.css";
import banner_bakso from "../../assets/images/banner_bakso.png";

const BaksoMania = () => {
  return (
    <>
      <section>
        <img
          src={banner_bakso}
          alt="banner_bakso"
          className="img-fluid banner_bakso"
        />
      </section>
      <section className="baksomania" id="baksomania">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto d-flex flex-column align-items-center">
              <div
                className="bakso_mania_title"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="1000"
              >
                <h1>BAKSO MANIA </h1>
                <p>NFT COLLECTIBLES</p>
              </div>
              <div
                className="baksomania_text"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1000"
              >
                <p>
                  A Binance Smart Chain Dapp where you can <span>RAISE</span>,
                  <span>TRADE</span>,<span>STAKE</span>, and <span>BATTLE</span>{" "}
                  your <span>Bakso Maniacs</span> with other players, all while
                  earning $BAKSO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BaksoMania;
