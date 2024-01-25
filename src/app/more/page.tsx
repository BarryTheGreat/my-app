import React from "react";
import Head from "next/head";

// Add the following CSS reset
const resetCSS = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Page = () => {
  return (
    <>
      <div
        className="text-center bg-cover bg-center min-h-screen flex flex-col items-center justify-center "
        style={{
          backgroundImage: 'url("LOGIN_BG.jpg")',
          fontFamily: "DM_Serif_Display",
        }}
      >
        <h1 className="text-4xl font-bold mb-6 text-white">
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
          adventures,{"\n"}
          and contribute to heritage preservation.{"\n"}
          We&apos;re your responsible travel companion, offering insights on
          safety, {"\n"}
          environmental responsibility,{"\n"}
          and detailed information about destinations.{"\n"}
          Rediscover the joy of observing the world with newfound appreciation.
          {"\n"}
          {"        "}
        </pre>
        <h3 className="text-lg text-white mb-6">
          Join us on a journey to balanced, informed, and fulfilling
          exploration.
        </h3>
      </div>
    </>
  );
};

export default Page;
