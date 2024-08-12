import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointment data from the MongoDB backend when the component mounts
    axios.get("mongodb+srv://aakashgajavalli:aakash@cluster0.du5ki1x.mongodb.net/?retryWrites=true&w=majority").then((response) => {
      setAppointments(response.data);
    });
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Appointment List</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Date and Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{appointment.name}</td>
              <td className="border px-4 py-2">{appointment.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;