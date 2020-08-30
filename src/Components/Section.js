import React from "react";
import PropTypes from "prop-types";
import "./Style/Section.css";

const Section = ({ title, children }) => (
  <div className="container">
    <span className="title">{title}</span>
    <div className="grid">{children}</div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
