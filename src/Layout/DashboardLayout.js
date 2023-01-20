import React from "react";
import { useContext } from "react";
import { FaList, FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/Auth Provider/AuthPovider";
import useAdmin from "../hooks/useAdmin";
import Header from "../Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content mt-10">
            <li>
              <Link
                className="font-bold text-red-600 flex items-center gap-4"
                to="/dashboard"
              >
                <FaList /> My Booking List Here
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link
                    className="font-bold text-red-600 flex items-center gap-4"
                    to="/dashboard/allusers"
                  >
                    {" "}
                    <FaUser /> All Users
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
