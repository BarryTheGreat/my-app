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
          Welcome to our platform,
        </h1>
        <h3 className="text-lg text-white mb-6">
          where we inspire mindful exploration in the midst of busy lives.
        </h3>
        <pre
          className=" text-center  bg-gray-600 p-8 rounded shadow overflow-clip"
          style={{ fontFamily: "DM_Serif_Display", fontSize: "18px" }}
        >
          1. Mission:{"\n"} Rediscover life&apos;s joys through our platform,
          emphasizing self-care and {"\n"}
          the beauty in the world around us.{"\n"}
          {"\n"}
          2. Travel Assistance:{"\n"} Explore seamlessly with our guidance on
          scheduling adventures {"\n"}
          and preserving heritage sites.
          {"\n"}
          {"\n"}
          3. Preservation:{"\n"} Actively contribute to safeguarding cultural
          treasures for future generations.{"\n"}
          {"\n"}
          4. Responsible Travel:{"\n"} Journey responsibly with our focus on
          safety and environmental consciousness.{"\n"}
          {"\n"}
          5. Comprehensive Info:{"\n"} Find detailed destination information for
          a seamless travel experience.{"\n"}
          {"\n"}
          6. Rediscover Joy:{"\n"} Join us in appreciating the simple joy of
          observing the world.{"\n"}
          {"\n"}
          7. Your Gateway:{"\n"} Let our platform be your guide to a balanced
          and fulfilling exploration of wonders.{"\n"}
        </pre>
        <div className="text-under-box mt-8 text-left max-w-2xl mx-auto">
          <h3 className="text-lg text-white mb-4">
            Join us on a journey to balanced, informed, and fulfilling
            exploration.
          </h3>
          <ul className="list-disc pl-6 text-white"></ul>
        </div>
      </div>
    </>
  );
};

export default page;
