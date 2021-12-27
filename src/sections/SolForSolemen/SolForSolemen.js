import React from "react";
import "./SolForSolemen.css";

const SolForSolemen = () => {
  return (
    <section className="solforsolemen">
      <div className="container">
        <div className="row">
          <div className="sol_for_solemen col-lg-10 mx-auto">
            <h2
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-delay="500"
            >
              $SOL FOR SOLEMEN
            </h2>
            <p
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-delay="500"
            >
              <span>Yayasan Solemen Indonesia</span> is a non-profit foundation
              established in 2010 to raise awareness and funds to support the
              disadvantaged in Bali, Indonesia. In particular, focusing on those
              living in the most remote and poorest areas of Bali that are often
              overlooked by mainstream NGOs or government assistance.{" "}
              <span>Solemen</span> currently assist over 2,800 patients and
              their offices are located above their 'Care and Recovery' 10
              bedroom facility.{" "}
            </p>
            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
              #SOLFORSOLEMEN is an official collaboration between Bakso Mania
              and <span>Yayasan Solemen Indonesia</span>. A percentage of all
              proceeds from the Bakso Mania collection will be provided directly
              and instantly to <span>Yayasan Solemen Indonesia</span>.
            </p>
            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
              Funds will be provided in Solana’s native token, $SOL.
            </p>
            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
              visit{" "}
              <a href="https://www.solemen.org" target="blank">
                www.solemen.org
              </a>{" "}
              to see other ways to contribute
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolForSolemen;
