import React from "react";
import "./Mint.css";

const mintList = [
  "Download Phantom Wallet for Solana",
  "Add Solana’s native token $SOL to your Phantom Wallet Address",
  "Return to baksomania.com and click “Connect Wallet”",
  'Click "Mint" and approve transaction',
  "Congratulations! Check your wallet to instantly find your new Bakso Maniacs NFT",
];

const Mint = () => {
  return (
    <section className="mint" id="mint">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div
              className="mint_title"
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-delay="500"
            >
              <h2>HOW TO MINT?</h2>
            </div>
          </div>
          <div
            className="mint_process"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="500"
          >
            {/* {mintList.map((item, indx) => (
              <div className="listItem" key={indx}>
                <div className="item">
                  <p>{indx + 1}</p>
                </div>
                <h4>{item}</h4>
              </div>
              
            ))} */}
            <div className="list">
              {mintList.map((item, index) => (
                <div
                  className="item"
                  key={index}
                  data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-delay={`${
                    index === 0
                      ? "500"
                      : index === 1
                      ? "700"
                      : index === 2
                      ? "900"
                      : "1000"
                  }`}
                >
                  <div className="count">
                    <p>{index + 1}</p>
                  </div>
                  <div>
                    <h4>{item}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mint;
