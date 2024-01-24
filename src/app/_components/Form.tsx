import { AddUser } from "../action";

function Form() {
  return (
    <main>
      <form
        action={AddUser}
        method="post"
        className="flex flex-col gap-4 text-black"
      >
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="firstname"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="lastname"
        />
        <input type="email" name="email" id="email" placeholder="email" />
        <button type="submit" className="bg-white">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Form;
