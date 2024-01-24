import { AddUser } from "../action";

function Form() {
  return (
    <main className="flex items-center justify-center h-screen">
      <form
        action={AddUser}
        method="post"
        className="bg-gradient-to-br from-cyan-500 to-blue-500 p-8 rounded-md shadow-md flex flex-col gap-4"
      >
        <label className="text-lg font-semibold">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter your first name"
          className="py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <label className="text-lg font-semibold">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter your last name"
          className="py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <label className="text-lg font-semibold">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none shadow-[3px_4px_2px_3px_#00000024]"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default Form;
