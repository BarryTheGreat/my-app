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
        <h1 className="text-4xl font-bold mb-6 text-white">
          Welcome to our platform
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
        <h3 className="text-lg mt-8 text-white mb-6">
          You can contact us directly!
        </h3>

        <div className="text-under-box mt-2 text-center max-w-2xl mx-auto">
          <p>
            <strong>Nikhil Gupta:</strong> <br />
            guptanikhil8424@gmail.com 9167534578
          </p>
          <br />
          <p>
            <strong>Disha Nevgi:</strong> <br />
            dishanevgi45@gmail.com 96534975188
          </p>
          <br />
          <p>
            <strong>Bharath Shivaji:</strong>
            <br />
            bharathshivaji2005@gmail.com 7045661161
          </p>
          <br />
          <p>
            <strong>Kartiki Balgude:</strong> <br />
            kartikibalgude18@gmail.com 8828155616
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
