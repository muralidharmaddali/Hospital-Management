import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import ReactLoading from "react-loading"; 

export default function BookAppointment(props) {
  const [Loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: {},
    dateTime: {},
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/book-appointment", data);
      if (response.status === 200) {
        setLoading(false);
        props.settoastCondition({
          status: "success",
          message: "Appointment booked successfully!",
        });
        props.setToastShow(true);
        // You can add a navigation action here if needed
      }
    } catch (error) {
      setLoading(false);
      setErrors(error.response.data.errors);
      props.settoastCondition({
        status: "error",
        message: "Please enter all fields correctly!",
      });
      props.setToastShow(true);
    }
  };

  return (
    <div className="body overflow-hidden">
      <Navbar></Navbar>
      <div className="bg-lime-200 w-full">
        <div className="">
          <div className=" flex justify-center mt-0">
            <h1 className="mt-2 px-8 rounded font-bold text-5xl">Book Appointment</h1>
          </div>

          <form
            className="font-lato lg:ml-60  lg:px-8 lg:py-4 bg-white shadow-2xl rounded max-w-screen-lg mt-8 mb-4 "
            onSubmit={onSubmit}
          >
            <div className="lg:grid lg:grid-cols-4 lg:gap-2 mt-4 mr-4 grid grid-cols-4 gap-2">
              <label className="font-bold lg:text-xl font-lato px-4 my-4 ">
                Name
              </label>
              <div>
                <input
                  className="bg-gray-200 rounded lg:h-10 lg:pl-4 mt-4 lg:text-md text-sm h-8 px-2"
                  required
                  placeholder="Name"
                  name="name"
                ></input>
                {errors.name && (
                  <span className="text-red-500 py-1">{errors.name}</span>
                )}
              </div>
            </div>
            <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
              <label className="font-bold lg:text-xl px-4">Date and Time</label>
              <input
                type="datetime-local"
                name="dateTime"
                className="bg-gray-200 lg:h-10 rounded pl-4 h-8"
                required
              ></input>
              {errors.dateTime && (
                <span className="text-red-500 py-1">{errors.dateTime}</span>
              )}
            </div>

            <div className="flex justify-center mt-8">
              {Loading ? (
                <ReactLoading
                  type={"bubbles"}
                  color={""}
                  height={"5%"}
                  width={"5%"}
                />
              ) : (
                <button className="bg-cyan-300 rounded p-2 px-8 font-bold text-xl hover:bg-gray-200">
                  Book Appointment
                </button>
              )}
            </div>
          </form>

          <div className="mt-auto relative bottom-0">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}
