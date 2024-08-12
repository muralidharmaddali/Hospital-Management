import React from "react";
import Navbar from "../components/components1/Navbar";
import Vector from "../assets/img/landingPage/vector.svg";
import Login from "../components/components1/Login";
import Footer from "../components/components1/Footer";

export default function LandingPage(props) {
    
  return (
  <div className="h-screen max-h-min flex flex-col">
    <Navbar></Navbar>

    <div className="body lg:flex  px-9 ml-0 mt-2 mr-px:2px py-0 w-full lg:h-5/6 ">
      <div className="lg:w-1/2 w-screen flex justify-center items-center">
        <Login
          setToastShow={props.setToastShow}
          settoastCondition={props.settoastCondition}
        ></Login>
      </div>
      <div className="lg:w-1/2 w-screen py-4 flex justify-around items-center order-2">
        <img
          src={Vector}
          alt="Graphics"
          className="lg:my-auto lg:mx-auto"
        />
      </div>
    </div>
    <div className="mt-auto relative bottom-0">
      <Footer></Footer>
    </div>
  </div>
);
}