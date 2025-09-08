import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const Navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userSignIn(email, password)
      .then((result) => {
        console.log("Login Success");
        Navigate("/");
      })
      .catch((error) => {
        console.log(error.massage);
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
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" for="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't Have An Account?
          <Link
            to={"/auth/register"}
            href="#"
            className="text-red-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
