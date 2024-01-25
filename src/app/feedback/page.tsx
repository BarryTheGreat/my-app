import React from "react";
const page = () => {
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
          Welcome to our platform,
        </h1>
        <h3 className="text-lg text-white mb-6">
          where we inspire mindful exploration in the midst of busy lives.
        </h3>
        {/* Added the feedback form */}
        <form action="#" method="post" className="text-slate-950">
          <label htmlFor="feedback">Provide your feedback:</label>
          <br />
          <textarea
            id="feedback"
            name="feedback"
            rows={4}
            cols={50}
            defaultValue={""}
          />
          <br />
          <input type="submit" defaultValue="Submit Feedback" />
        </form>
        {/* Sample feedbacks */}
        <div className="text-under-box mt-8 text-left max-w-2xl mx-auto">
          <h3 className="text-lg text-white mb-6">
            Join us on a journey to balanced, informed, and fulfilling
            exploration.
          </h3>
          <ul>
            <li>
              <strong>anuja:</strong> &quot;Absolutely love the platform! It has
              made my travel experiences so much more enjoyable and
              stress-free.&quot;
            </li>
            <li>
              <strong>aditya:</strong> &quot;The travel assistance provided is
              top-notch. I feel more confident exploring new destinations with
              your guidance.&quot;
            </li>
            <li>
              <strong>devang:</strong> &quot;Kudos to the team for promoting
              responsible travel. It&apos;s refreshing to see a platform that
              cares about the environment and cultural preservation.&quot;
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
