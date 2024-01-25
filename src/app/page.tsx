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
    bottom: "10px",
    right: "10px",
    textAlign: "right",
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
        style={{ top: "80px" }}
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
        style={{ top: "70px" }}
      >
        <div>
          <a href="form" className="account" style={anchorStyle}>
            Account
          </a>
        </div>
      </div>
      <div
        style={bottomRightStyle}
        className="grid gap-4 grid-cols-2 grid-rows-3 "
      >
        <div className="grid gap-4 grid-cols-1 grid-rows-3">
          <a href="about" style={anchorStyle}>
            About Us
          </a>
          <a href="team" style={anchorStyle}>
            The Team
          </a>
          <a href="goals" style={anchorStyle}>
            Our Goals
          </a>
        </div>

        <div className="grid gap-4 grid-cols-1 grid-rows-3">
          <a href="contact" style={anchorStyle}>
            Contact Us
          </a>

          <a href="more" style={anchorStyle}>
            More on Trek-La-Vista
          </a>
          <a href="feedback" style={anchorStyle}>
            Feedback
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
