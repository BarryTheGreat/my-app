import React from "react";

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
        <h1 className="text-4xl font-bold mb-6 text-white">
          Welcome to our platform
        </h1>
        <h3 className="text-lg text-white mb-6">
          where we inspire mindful exploration in the midst of busy lives.
        </h3>
        <pre
          className="mt-6 text-center  bg-gray-600 p-8 rounded shadow overflow-clip"
          style={{ fontFamily: "DM_Serif_Display", fontSize: "18px" }}
        >
          Welcome to our trekking hub! Our journey began with a shared love for
          the outdoors and a passion {"\n"}
          for exploration. {"\n"}
          As avid trekkers, we envisioned a platform that transcends
          conventional travel experiences.{"\n"}
          {"\n"}
          Founded on the spirit of wanderlust, our trekking and traveling
          website is a reflection of {"\n"}
          our own transformative adventures. {"\n"}
          We&apos;re not just crafting itineraries; we&apos;re weaving
          narratives – {"\n"}
          stories that unfold with every step on a mountain path or through a
          dense forest.{"\n"}
          {"\n"}
          Join us in celebrating the untamed spirit of adventure. {"\n"}
          Explore with us, and let&apos;s create unforgettable travel memories
          together. {"\n"}
          Welcome to a community where every journey is a unique chapter in our
          collective story.
        </pre>
        <div className="text-under-box mt-8 text-left max-w-2xl mx-auto">
          <h3 className="text-lg text-white mb-4">
            Join us on a journey to balanced, informed, and fulfilling
            exploration.
          </h3>
        </div>
      </div>
    </>
  );
};

export default page;
