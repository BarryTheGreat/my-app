import React from "react";
import { DM_Serif_Display } from "@next/font/google";

const page = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div
        className="text-center bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url("LOGIN_BG.jpg")',
          fontFamily: "DM_Serif_Display",
        }}
      >
        <h1 className="text-4xl mt-16 font-bold mb-6 text-white">
          Welcome to our platform,
        </h1>
        <h3 className="text-lg text-white mb-6">
          where we inspire mindful exploration in the midst of busy lives.
        </h3>
        <pre
          className=" text-center  bg-gray-600 p-8 rounded shadow overflow-clip"
          style={{ fontFamily: "DM_Serif_Display", fontSize: "18px" }}
        >
          Discover the world&apos;s hidden treasures, plan seamless travel
          adventures, {"\n"}
          and contribute to heritage preservation.{"\n"}
          We&apos;re your responsible travel companion, offering insights on
          safety, {"\n"}
          environmental responsibility,{"\n"}
          and detailed information about destinations.{"\n"}
          Rediscover the joy of observing the world with newfound appreciation.
          {"\n"}
        </pre>
        <br></br>
        <h3 className="text-lg text-white mb-6">
          Join us on a journey to balanced, informed, and fulfilling
          exploration.
        </h3>
        <h3 className="text-lg text-white mb-6" style={{ fontWeight: "bold" }}>
          Meet our talented developers:
        </h3>
        <div
          className=" text-center max-w-lg bg-gray-600 p-8 rounded shadow overflow-clip"
          style={{ fontFamily: "DM_Serif_Display", fontSize: "18px" }}
        >
          <p>
            <strong>Nikhil Gupta:</strong>A dynamic F.Y BSc Computer Science
            student, Nikhil demonstrates a keen aptitude for both back-end and
            front-end development. His proficiency extends to CSS and web
            design, showcasing a smart and enthusiastic approach to the
            programming field.
          </p>
          <br></br>
          <p>
            <strong>Disha Nevgi:</strong>A dedicated HTML programmer, Disha
            excels in error-solving skills. Her proficiency in troubleshooting
            and commitment to HTML programming sets her apart, making her a
            valuable asset in the realm of web development.
          </p>
          <br></br>
          <p>
            <strong>Bharath Shivaji:</strong>A programming prodigy since 7th
            grade, Bharath possesses an exceptional command of numerous computer
            languages. His perfect programming skills, coupled with an in-depth
            understanding of various aspects, showcase his prowess in the coding
            domain. Bharath is not only adept at solving complex errors but also
            exhibits a comprehensive knowledge base, making him a standout
            programmer.
          </p>
          <br></br>
          <p>
            <strong>Kartiki Balgude:</strong>A dedicated individual with a flair
            for design, Kartiki is also a first-year BSc Computer Science
            student. Her skills extend beyond programming, showcasing a talent
            for practical problem-solving. With a keen eye for design, Kartiki
            brings a unique blend of creativity and analytical thinking to the
            field.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
