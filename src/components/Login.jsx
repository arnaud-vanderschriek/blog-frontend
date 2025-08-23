import { useState } from "react";

const Login = () => {
  const [value, setValue] = useState({
    pseudo: "",
    email: "",
  });

  const change = (e, name) => {
    setValue((prev) => ({
      ...prev,
      [name]: e, 
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    // connection
  }
  return (
    <div className="mt-20 ml-100 mr-100">
      <h1 class="text-4xl mt-4 font-black text-center">Login Page</h1>
      <form action="POST" onSubmit={submit} class="flex flex-col mt-20 m-4 p-4 h-100 shadow-lg items-center">
        <div className="flex flex-col">
          <label class="mt-4 ml-4">Pseudo:</label>
          <input class="shadow-xl mt-4 ml-4 mr-4 p-2 w-100 h-10 border-1" type="text" onChange={(e) => change(e.target.value, "pseudo") } />
          <label class="mt-4 ml-4">Email:</label>
          <input class="shadow-lg mt-2 mb-4 ml-4 w-100 border-1 p-1" type="text" onChange={(e) => change(e.target.value, "email")}/>
        </div>
        <button class="bg-black text-white rounded-lg p-2 mb-2 hover:bg-gray-500 w-50 mt-15" type="submit">Envoyez</button>
      </form>
    </div>
  )
}

export default Login;