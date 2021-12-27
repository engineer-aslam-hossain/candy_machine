import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
  return (
    <div className="section_title">
      <h1>{title} </h1>
    </div>
  );
};

export default SectionTitle;
