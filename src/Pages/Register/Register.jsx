import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { userRegister, userUpdate } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passError, SetPassError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const Navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;

    if (name.length < 5) {
      setError("Name Must Be 5 Charrecters");
    }

    if (password.length < 6) {
      SetPassError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      SetPassError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[0-9]/.test(password)) {
      SetPassError("Password must contain at least one number.");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      SetPassError(
        "Password must contain at least one special character (!@#$%^&*)."
      );
      return;
    }

    console.log(name, password, email, photo);
    userRegister(email, password)
      .then((result) => {
        console.log("Register Success");
        console.log(result.user);

        userUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            console.log("Profile UPdate Success");
          })
          .catch(() => {
            console.log("Profile Update Error");
          });

        Navigate("/");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register your account
        </h2>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label for="name" className="block text-gray-700 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <small className="text-red-500">{error}</small>
          </div>

          <div className="mb-4">
            <label for="photo" className="block text-gray-700 mb-2">
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label for="email" className="block text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label for="password" className="block text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
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

            <small className="text-red-500">{passError}</small>
          </div>

          <div className="mb-6 flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label for="terms" className="text-gray-700 text-sm">
              Accept{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Allready Have An Account?
          <Link
            to={"/auth/login"}
            href="#"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
