import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false)

  const Location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userSignIn(email, password)
      .then((result) => {
        console.log("Login Success");
        Navigate(`${Location.state ? Location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login your account
        </h2>

        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" for="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" for="password">
              Password
            </label>


            <div className="relative flex items-center">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-2 cursor-pointer"
              >
                {showPass ? (
                  <MdOutlineRemoveRedEye size={25} />
                ) : (
                  <FaRegEyeSlash size={25} />
                )}
              </span>
            </div>
          </div>
          <p className="text-xs text-blue-700 underline my-2"> <a href="#">Forget Password</a></p>

          <div>
            <small className="text-red-500">{error}</small>
          </div>


          

          <button
            type="submit"
            className="w-full cursor-pointer bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't Have An Account?
          <Link
            to={"/auth/register"}
            href="#"
            className="text-blue-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
