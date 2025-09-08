import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Register = () => {
  const { user, userRegister } = useContext(AuthContext);
  console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    console.log(name, password, email, photo);
    userRegister(email, password)
      .then((result) => {
        console.log("Register Success");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">
          Register your account
        </h2>

        <form onSubmit={handleRegister}>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-4">
            <label for="photo" class="block text-gray-700 mb-2">
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter your photo URL"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-6 flex items-center">
            <input type="checkbox" id="terms" class="mr-2" />
            <label for="terms" class="text-gray-700 text-sm">
              Accept{" "}
              <a href="#" class="text-blue-500 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Register
          </button>
        </form>
        <p class="mt-6 text-center text-sm text-gray-600">
          Allready Have An Account?
          <Link
            to={"/auth/login"}
            href="#"
            class="text-blue-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
