import React from 'react';
import Navbar from './Navbar';
const Facilities = () => {
  const facilitiesData = [
    {
      title: 'Emergency Care',
      description: '24/7 emergency medical care and trauma services.',
    },
    {
      title: 'Surgery Suites',
      description: 'State-of-the-art surgical facilities and expert surgeons.',
    },
    {
      title: 'Radiology',
      description: 'Advanced imaging and diagnostic services.',
    },
    {
      title: 'Maternity Ward',
      description: 'Comprehensive care for expectant mothers and newborns.',
    },
    {
      title: 'Cardiology Dept',
      description: 'Cardiovascular diagnostics and treatment.',
    },
    {
      title: 'Ambulance',
      description: 'It work on whole day as well night.',
    },
    {
        title: '24/7 Service',
        description: 'Service provided at any time in hospital.',
      },
      {
        title: 'cardiology',
        description: 'It is provided for the Heart patients .',
      },
  ];

  return (
    <div className="p-1 overflow-hidden font-lato bg-lime-200">
      <Navbar/>
      <h1 className="p-2 text-3xl font-bold mb-4 flex justify-center bg-lime-200">Our Facilities</h1>
      <div className=" p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {facilitiesData.map((facility, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-xl bg-white hover:shadow-2xl">
            <img src={`https://via.placeholder.com/300x200?text=${facility.title}`} alt={facility.title} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;