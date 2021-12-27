import React from "react";
import "./WhyBaksoMania.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import bakso from "../../assets/images/bg1.png";

const WhyBaksoMania = () => {
  return (
    <section className="why_bakso_mania" id="why_bakso_mania">
      <div className="container">
        <div className="row">
          <div
            className="d-flex justify-content-center"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="1000"
          >
            <SectionTitle title="Why Bakso Mania?" />
          </div>
          <div className="col-lg-8 why_card mx-auto mt-3">
            <div
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-delay="1000"
            >
              <h5>OBJECTIVE:</h5>
              <p className="first_p">
                <span>Bakso Finance</span> & <span>Bakso Mania NFTs:</span> our
                mission is to bring indonesian culture to the world stage while
                presenting a fun and exciting way to introduce south east asia
                to a user friendly unintimidating adoption of defi, nfts, and
                crypto.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="1000"
            >
              <p className="mb-0">For example:</p>
              <p>
                Our <span>Arisan</span> product on bakso.finance is bringing
                traditional Indonesian micro-finance and social practices to
                solana blockChain providing familiarity with the rewards and
                security of DeFi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={bakso} alt="bakso1" className="baksoBg" />
      </div>
    </section>
  );
};

export default WhyBaksoMania;
