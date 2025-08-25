import { useState } from "react";
import { getConnected } from "../services/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const change = (e, name) => {
    setValue((prev) => ({
      ...prev,
      [name]: e, 
    }));
  };


  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await getConnected(value);  

      if (!res.success) {
        setError(res.message); 
        if (res.errors) {
          const errorsObj = {};
          res.errors.forEach(err => {
            errorsObj[err.field] = err.message;
          });
          setFieldErrors(errorsObj);
        }
        return;
      }

      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      if(err) {
        setError("Impossible de contacter le serveur");
      }
    }

  }
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-4xl mt-4 font-black text-center">Blog Space</h1>
      <img src="blogger-logo-icon.png" className="w-40 mt-2" alt="logo" />
  
      <form 
        onSubmit={submit} 
        className="flex flex-col mt-4 p-6 shadow-lg items-center w-full max-w-md"
      >
        <div className="flex flex-col w-full">
          <label className="ml-2">Email:</label>
          <input 
            className="shadow-xl mt-2 p-2 w-full border rounded"
            type="text"
            onChange={(e) => change(e.target.value, "email")} 
          />
          {fieldErrors.email && (
            <span className="text-red-500 text-sm mt-1">{fieldErrors.email}</span>
          )}

          <label className="mt-4 ml-2">Password:</label>
          <input 
            className="shadow-lg mt-2 p-2 w-full border rounded"
            type="password"
            onChange={(e) => change(e.target.value, "password")}
          />
          {fieldErrors.password && (
            <span className="text-red-500 text-sm mt-1">{fieldErrors.password}</span>
          )}
        </div>

        {error && (
          <div className="text-red-600 mt-4 font-medium">{error}</div>
        )}

        <button 
          className="bg-black text-white rounded-lg p-2 mt-6 w-1/2 hover:bg-gray-700"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default Login;