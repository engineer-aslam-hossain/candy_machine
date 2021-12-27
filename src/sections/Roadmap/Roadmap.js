import React from "react";
import logoImg from "../../assets/images/bakso_circle_icon.png";
import bg2 from "../../assets/images/bg2.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Roadmap.css";

const timelineData = [
  {
    stage: "Stage 1",
    items: [
      "Bakso Maniacs NFT Gen 1 Collection",
      "Bakso Token",
      "Referrals Contract",
    ],
  },
  {
    stage: "Stage 2",
    items: [
      "Ambassador Program",
      "Arisan Launch Mainnet",
      "Coingecko & Coinmarketcap",
    ],
  },
  {
    stage: "Stage 3",
    items: [
      "Major Exchange Listing",
      "Token Airdrop Event",
      "NFT Airdrop Event Gen 2",
      "NFT Staking",
    ],
  },
];

const TimelineItem = ({ data, idx }) => (
  <div
    className={`timeline-item itemNo${idx + 1}`}
    data-aos={`${(idx + 1) % 2 !== 0 ? "fade-right" : "fade-left"}`}
    data-aos-duration="700"
    data-aos-delay="500"
  >
    <div className={`timeline-item-content`}>
      <h3>{data.stage}</h3>

      <ul>
        {data.items.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ul>
      <span className={`circle`}>
        <img src={logoImg} alt="logoImg" className="img-fluid" />
      </span>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <section className={`timeline`} id="roadmap">
      <div className="container">
        <div className="row">
          <div
            className={`col-lg-12 roadmapTitle d-flex justify-content-center px-0`}
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="500"
          >
            <SectionTitle title="bakso roadmap" />
          </div>
          {timelineData.length > 0 && (
            <div className={`timeline-container`}>
              {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} idx={idx} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <img src={bg2} alt="chicken" className="chickenImg" />
      </div>
    </section>
  );
};

export default Timeline;
