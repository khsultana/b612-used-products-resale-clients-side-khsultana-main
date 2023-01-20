import React, { useContext } from "react";
import {
  FaAddressBook,
  FaBlog,
  FaDashcube,
  FaHome,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/logo.png";
import { AuthContext } from "../../Context/Auth Provider/AuthPovider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <>
      <li className="font-semibold text-red-600">
        <Link to="/">
          <FaHome></FaHome>Home
        </Link>

        <Link to="/about">
          <FaAddressBook></FaAddressBook> About
        </Link>
        <Link to="/blogs">
          <FaBlog></FaBlog> Blogs
        </Link>
        {user?.uid ? (
          <>
            <Link to="/dashboard">
              <FaDashcube></FaDashcube> DashBoard
            </Link>
            <>
              <button onClick={handleLogout}>
                <FaLock></FaLock> Signout
              </button>
            </>
          </>
        ) : (
          <>
            <Link to="/login">
              <FaLock></FaLock> Login
            </Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          {/* Logo  */}
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <h2 className="text-4xl font-bold flex">
              {" "}
              Car
              <img className="h-14" src={logo} alt="" />{" "}
              <span className="text-4xl font-bold text-red-600">Zone</span>
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>

        <div className="navbar-end">
          <Link className="font-bold mr-2" to="/">
            {user?.displayName}
          </Link>
          <Link className="font-bold mr-2" to="/">
            {user?.photoURL ? (
              <img
                style={{ height: "40px" }}
                src={user.photoURL}
                alt=""
                className="rounded-full"
              />
            ) : (
              <FaUser></FaUser>
            )}
          </Link>
          {/* <button className="border-none rounded-none btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            Search
          </button> */}
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
