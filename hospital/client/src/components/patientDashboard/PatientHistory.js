import Footer from "../components1/Footer";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import PatientHistoryCompo from "./PatientHistoryCompo";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PatientHistory = (props) => {
  const navigate = useNavigate();
  const [dob, setDob] = useState("01/01/2006");
  const [patient, setPatient] = useState({
    name: {
      firstName: "",
      middleName: "",
      surName: "",
    },
    dob: "",
    mobile: "",
    email: "",
    adharCard: "",
    bloodGroup: "",
    address: {
      building: "",
      city: "",
      taluka: "",
      district: "",
      state: "",
      pincode: "",
    },
    password: "",
    diseases: [{ disease: "", yrs: "" }],
    contactPerson: {
      name: {
        firstName: "",
        surName: "",
      },
      mobile: "",
      email: "",
      relation: "",
      address: {
        building: "",
        city: "",
        taluka: "",
        district: "",
        state: "",
        pincode: "",
      },
    },
  });
  const [prescriptions, setPrescriptions] = useState([{}]);

  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    async function getpatient() {
      const res = await fetch("/getpatient");
      const data = await res.json();
      if (data.AuthError) {
        props.settoastCondition({
          status: "info",
          message: "Please Login to proceed!!!",
        });
        props.setToastShow(true);
        navigate("/");
      } else {
        setPatient(data.patient);
        if (data.patient.prescriptions) {
          setPrescriptions(data.patient.prescriptions.reverse());
        }
        setDob(convertDatetoString(patient.dob));
      }
    }
    getpatient();
  }, [dob]);
  return (
    <div className="col-span-10 font-lato bg-lime-200">
      <div className=" px-12">
        <div className="h-screen">
          <div className="font-lato mainf">
            <Link to="/patient/profile">
              <div className="flex bg-white rounded shadow-2xl  px-4   ml-auto h-14 w-1/5 mr-8 mt-8">
                <img
                  src={patient_profile}
                  className="w-12 p-1 rounded-2xl"
                  alt="profile"
                ></img>
                <div className="grid grid-rows-2 ml-4 gap-2  mb-4">
                  <div className="mt-4 ml-4  font-bold font-lato">
                    <h1 className="ml-2">
                      {`${patient.name.firstName} ${patient.name.surName}`}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
            <div className="grid justify-between m-8">
              <div className="font-bold text-xl ml-4">
                <h1>Patient Reports</h1>
              </div>
            </div>
            <div className="bg-red m-4 rounded-lg bg-white ">
              <div className="grid grid-rows-400 p-6 gap-2 shadow-2xl">
                <div className="grid grid-cols-4 font-bold ">
                  <div>
                    <h1>On Date</h1>
                  </div>
                  <div>
                    <h1>About Doctor</h1>
                  </div>
                  <div>
                    <h1>Medical Evaluation</h1>
                  </div>
                  <div>
                    <h1>Treatment plan</h1>
                  </div>
                  <hr></hr>
                  <hr></hr>
                  <hr></hr>
                  <hr></hr>
                </div>
                {prescriptions.length > 0 ? (
                  prescriptions.map((prescription) => {
                    return (
                      <PatientHistoryCompo
                        prescription={prescription}
                        setPrescriptionID={props.setPrescriptionID}
                      />
                    );
                  })
                ) : (
                  <div className="font-bold mt-3 mx-auto">
                    No Record Found...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-20 mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PatientHistory;
