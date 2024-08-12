import React from "react";
import logo from "../../assets/img/landingPage/logo.png";
import { NavLink } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="lg:bg-amber-300 lg:w-screen lg:h-14 shadow-sm lg:px-16 lg:py-3 flex justify-items-center items-center  w-full ">
      <img
        src={logo}
        alt="logo"
        className="lg:h-10 lg:pr-3 h-10 pr-4 pl-2 mt-2"
      />
      <h1 className="font-lato font-bold text-sm lg:text-xl mt-2 mb-2">
        <Link to="/">MAHD HOSPITAL</Link>
      </h1>
      <ul className="flex ml-auto lg:w-95 justify-space-around  font-lato font-semibold  w-25 ">
        <li>
         <button className="rounded lg:px-2 px-2 py-1 mr-2 hover:bg-white hover:text-black"><Link to="/">Home</Link></button>
        </li>
        <li>
        <button className="rounded lg:px-2  px-2 py-1 mr-2 hover:bg-white hover:text-black"><Link to="/about">About us</Link></button>
        </li>
        <li>
        <button className="rounded lg:px-2 px-2 py-1 mr-2 hover:bg-white  hover:text-black"><Link to="/Gallery">Gallery</Link></button>
        </li>
        <li>
         <button className="rounded lg:px-2  px-2 py-1 mr-2 hover:bg-white hover:text-black"><Link to="/Facilities">Facilities</Link></button>
        </li>
        <li>
        <button className="rounded lg:px-2 px-2 py-1 mr-2 hover:bg-white hover:text-black"><Link to="/contact">Contact us</Link></button>
        </li>
        <li>
        <button className="bg-white rounded font-semibold font-lato shadow-sm hover:text-white lg:px-2 py-1 px-2 mr-2 hover:bg-black hover:text-black"><NavLink to={"/Appointment"}>Appointment</NavLink></button>
        </li>
      </ul>

      <button className="bg-white lg:py-2 lg:px-3 rounded font-semibold font-lato shadow-sm hover:bg-black hover:text-white py-1 px-2 mr-2">
        {location.pathname === "/register" ? (
         <Link to="/">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </button>
    </nav>
  );
}
