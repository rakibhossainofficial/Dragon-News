import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import profileImg from "../../public/images/user.png"

const Navbar = () => {
  const { user, userSignout } = useContext(AuthContext);

  const handleSignout = () => {
    userSignout()
      .then(() => {
        console.log("Signout Success");
      })
      .catch(() => {
        console.log("Sign Out error");
      });
  };

  return (
    <div className="flex items-center justify-between">
      {/* blank div  */}
      <div></div>
      {/* Navbar */}
      <div className="flex items-center gap-8 font-semibold text-[var(--color-accent)]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      {/* login btn  */}

      <div className="flex items-center gap-4">
        <span className="font-bold">{ user ?  user.displayName : " "}</span>
        <img className="w-12 h-12 rounded-full outline-2 outline-white" src={user ? user.photoURL : profileImg} alt="user-photo" />

        <div>
          {user ? (
            <>
            
            <button onClick={handleSignout} className="btn">
              Logout
            </button>
            </>
          ) : (
            <Link to={"/auth/login"} className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
