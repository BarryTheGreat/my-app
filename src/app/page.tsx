/* eslint-disable @next/next/no-img-element */
import React from "react";
import { DM_Serif_Display } from "@next/font/google";

const ImageContainer = () => {
  const anchorStyle = {
    fontSize: "25px",
    fontFamily: "DM_Serif_Display",
  };

  const bottomRightStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "5px",
    right: "10px",
    textAlign: "left",
    fontFamily: "DM_Serif_Display",
  };

  return (
    <div className="image-container relative text-center">
      <img
        src="hello.png"
        alt="Hello Image"
        className="w-full h-max object-cover"
      />
      <div
        className="text-overlay absolute left-1/2 w-full"
        style={{ top: "50px" }}
      >
        <div className="flex justify-center">
          <a href="equipment" className="text-item mr-10" style={anchorStyle}>
            Equipment
          </a>
          <a href="about" className="text-item mr-10" style={anchorStyle}>
            About Us
          </a>
          <a href="blog.html" className="text-item mr-10" style={anchorStyle}>
            Blog
          </a>
        </div>
      </div>
      <div
        className="text-overlay absolute right-0 flex top-0"
        style={{ top: "54px" }}
      >
        <div>
          <a href="form" className="account" style={anchorStyle}>
            Account
          </a>
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-4 mb-24 mr-44"
        style={bottomRightStyle}
      >
        <a className="p-4 text-2xl" href="team">
          The Team
        </a>
        <a className="p-4 text-2xl" href="goals">
          Our Goals
        </a>
        <a className="p-4 text-2xl" href="about">
          About Us
        </a>
        <a className="p-4 text-2xl" href="contact">
          Contact Us
        </a>
        <a className="p-4 text-2xl" href="feedback">
          Feedback
        </a>
        <a className="p-4 text-2xl" href="more">
          More
        </a>
      </div>
    </div>
  );
};

export default ImageContainer;
