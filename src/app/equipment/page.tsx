import React from "react";
import { DM_Serif_Display } from "@next/font/google";

const Page = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div
        className="text-center bg-cover bg-center min-h-screen flex flex-col items-center justify-center "
        style={{
          backgroundImage: 'url("LOGIN_BG.jpg")',
          fontFamily: "DM_Serif_Display",
        }}
      >
        <h1 className="text-4xl mt-16 font-bold mb-6 text-white">
          Welcome to our platform
        </h1>
        <h3 className="text-lg text-white mb-6">
          where we inspire mindful exploration in the midst of busy lives.
        </h3>
        <pre
          className=" text-center  bg-gray-600 p-8 rounded shadow overflow-clip"
          style={{ fontFamily: "DM_Serif_Display", fontSize: "18px" }}
        >
          {`
          1. Free Camps:\n Enjoy complimentary stays in well-equipped camps,
            strategically located to enhance your connection with nature.\n
          2. Nourishing Meals:\n Relish nourishing and thoughtfully prepared meals,
            ensuring you stay energized throughout your trek.\n
          3. Seamless Accommodation:\n Experience worry-free treks with pre-arranged camps,
            removing the hassle of finding suitable lodging.\n
          4. Campfires:\n Unwind in the evenings with cozy campfires, fostering camaraderie among
            fellow trekkers under the starlit sky.\n
          5. Detailed Maps:\n Navigate the trails confidently with our detailed maps, ensuring you
            don't miss any hidden gems along the way.\n
          6. Guided Exploration:\n Benefit from expert guidance with our experienced trek
            leaders, enhancing your understanding of the terrain and local flora/fauna.\n
          7. Safety Essentials:\n Your well-being is our priority – we provide essential safety equipment,\n first aid kits, and emergency protocols for a
            secure trekking experience.

          Choose our comprehensive trekking support for an
          all-encompassing experience that blends comfort with the thrill of the trail.`}
        </pre>
        <div className="text-under-box mt-8 text-left max-w-2xl mx-auto">
          <h3 className="text-lg text-white mb-4">
            Join us on a journey to balanced, informed, and fulfilling
            exploration.
          </h3>
          <ul className="list-disc pl-6 text-white">
            {/* Add your list items here */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
