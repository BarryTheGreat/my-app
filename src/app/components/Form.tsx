import { AddUser } from "../action";
import { DM_Serif_Display } from "next/font/google";
import type { AppProps } from "next/app";

function Form() {
  return (
    <>
      <div
        className="header mt-4 mb-8 text-3xl font-black text-slate-700"
        style={{ fontFamily: "DM_Serif_Display" }}
      >
        Enter Credentials
      </div>
      <main className="flex items-center justify-center max-h-screen">
        <form
          action={AddUser}
          method="post"
          className="bg-gradient-to-br from-cyan-500 to-blue-500 p-8 flex flex-col gap-4"
          style={{ fontFamily: "DM_Serif_Display", borderRadius: "15px" }}
        >
          <label className="text-lg font-semibold">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your first name"
            className="py-2 px-4 text-black border rounded-md focus:outline-none focus:border-blue-500"
          />

          <label className="text-lg font-semibold">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter your last name"
            className="py-2 px-4 text-black border rounded-md focus:outline-none focus:border-blue-500"
          />

          <label className="text-lg font-semibold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="py-2 px-4 text-black border rounded-md focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none shadow-[3px_4px_2px_3px_#00000024]"
          >
            Login
          </button>
        </form>
      </main>
    </>
  );
}

export default Form;
