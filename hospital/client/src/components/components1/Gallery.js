import React from 'react';
import Navbar from './Navbar';
const images = [
  'https://www.obaid.info/wp-content/uploads/2021/05/Hospital.jpg',
  'https://i.pinimg.com/originals/f0/ef/a3/f0efa379354121db813d22a3fd8a399d.jpg',
  'https://wallpapercave.com/wp/wp2655088.jpg',
  'https://www.fortech.ro/wp-content/uploads/2020/06/Hospital-Management-System_Fortech.png',
  'https://static.vecteezy.com/system/resources/thumbnails/004/335/587/small_2x/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-vector.jpg',
  'https://www.enbocadetodoshd.com.ar/u/fotografias/m/2023/10/17/f1280x720-199391_331066_5050.jpeg',
  'https://www.sott.net/image/s30/603871/full/doctor_hospital.jpg',
  'https://www.circuits-central.com/wp-content/uploads/2020/05/Medical-2.jpg',
  'https://i0.wp.com/ccf.georgetown.edu/wp-content/uploads/2016/10/bigstock-Hospital-building-sign-closeup-124050428.jpg?resize=1200%2C675px&ssl=1',
  'https://thumbs.dreamstime.com/z/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg',
  'https://i.pinimg.com/736x/25/58/87/2558877fe4c62d0dadd62cdf00f3caa0.jpg',
  'https://paintingvalley.com/sketches/hospital-building-sketch-20.jpg',
  'https://st.depositphotos.com/2065849/3236/i/950/depositphotos_32367199-stock-photo-operating-room-in-cardiac-surgery.jpg',
  'https://mcdmag.com/wp-content/uploads/2014/11/1114-UTSouthwesternpatientroom-1000x600.jpg',
  'https://saportakinsta.s3.amazonaws.com/wp-content/uploads/2015/10/Ambulance-1500x1087.jpg'

];

const Gallery = () => {
  return (
    <div className="p-0  mt-0 font-lato bg-lime-200 overflow-x-hidden">
        <Navbar/>
      <h1 className="text-3xl mt-2 font-bold mb-5 flex justify-center">Hospital Gallery</h1>
      <div className="grid grid-cols-5 md:grid-cols-5 shadow-xl hover:shadow-2xl lg:grid-cols-5 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="rounded-lg overflow-hidden hover:shadow-2xl">
            <img src={imageUrl} alt={`pic ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;