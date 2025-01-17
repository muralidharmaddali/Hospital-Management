import "./App.css";
import Contact from "./components/components1/Contact";
import RegisterPatient from "./components/components1/RegisterPatient";
import RegisterDoctor from "./components/adminDashboard/RegisterDoctor";
import LandingPage from "./components2/LandingPage";
import Gallery from "./components/components1/Gallery";
import About from "./components/components1/About";
import PatientDashboard from "./components2/PatientDashboard";
import DoctorDashboard from "./components2/DoctorDashboard";
import AdminDashboard from "./components2/AdminDashboard";
import PatientProfile from "./components/patientDashboard/PatientProfile";
import DoctorProfile from "./components/doctorDashboard/DoctorProfile";
import PatientReports from "./components/patientDashboard/PatientReports";
import AddNewDiagnosis from "./components/doctorDashboard/AddNewDiagnosis";
import { Routes, Route } from "react-router-dom";
import PatientList from "./components/adminDashboard/PatientList";
import DoctorList from "./components/adminDashboard/DoctorList";
import PatientProfileSideBar from "./components/patientDashboard/PatientProfileSideBar";
import PatientHistory from "./components/patientDashboard/PatientHistory";
import DoctorDashboardSidebar from "./components/doctorDashboard/DashboardSidebar";
import AdminSidebar from "./components/adminDashboard/AdminSidebar";
import PreviewPrescription from "./components/patientDashboard/PreviewPrescription";
import PatientReportsDoctorView from "./components/doctorDashboard/PatientReportsDoctorView";
import PatientHistoryDoctorView from "./components/doctorDashboard/PatientHistoryDoctorView";
import PreviewPrescriptionDoctorView from "./components/doctorDashboard/PreviewPrescriptionDoctorView";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./components2/Page_404";
import Facilities from "./components/components1/Facilities";
import AppointmentList from "./components/components1/AppointmentList";

import Appointment from "./components/components1/Appointment";
function App() {
  const [healthID, setHealthID] = useState("");
  const [prescriptionID, setPrescriptionID] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const [toastCondition, settoastCondition] = useState({
    status: "",
    message: "",
  });

  if (toastShow) {
    if (toastCondition.status === "success") {
      toast.success(toastCondition.message);
    } else if (toastCondition.status === "error") {
      toast.error(toastCondition.message);
    } else if (toastCondition.status === "warning") {
      toast.warn(toastCondition.message);
    } else if (toastCondition.status === "info") {
      toast.info(toastCondition.message);
    }
    settoastCondition({
      status: "",
      message: "",
    });
    setToastShow(false);
  }

  return (
    <div className="bg-bgprimary flex">
      <Routes>
        <Route path="/" element={<LandingPage settoastCondition={settoastCondition} setToastShow={setToastShow}/>}/>
        <Route path="Gallery" element={<Gallery settoastCondition={settoastCondition} setToastShow={setToastShow}/>}/>
        <Route path="Facilities"element={<Facilities settoastCondition={settoastCondition} setToastShow={setToastShow}/>}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact settoastCondition={settoastCondition} setToastShow={setToastShow}/>}/>
        <Route path="Register" element={<RegisterPatient setToastShow={setToastShow} settoastCondition={settoastCondition}/>}/>
        <Route path="patient" element={<PatientProfileSideBar settoastCondition={settoastCondition} setToastShow={setToastShow} />}>
        <Route path="dashboard" element={<PatientDashboard setPrescriptionID={setPrescriptionID} settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="reports" element={<PatientReports setPrescriptionID={setPrescriptionID} settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="history" element={<PatientHistory setPrescriptionID={setPrescriptionID} settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="profile" element={<PatientProfile setPrescriptionID={setPrescriptionID} settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="prescription" element={<PreviewPrescription prescriptionID={prescriptionID} settoastCondition={settoastCondition} setToastShow={setToastShow} />} /></Route>
        <Route path="doctor" element={<DoctorDashboardSidebar setToastShow={setToastShow} settoastCondition={settoastCondition} />}>
        <Route path="dashboard" element={<DoctorDashboard healthID={healthID} setHealthID={setHealthID} setPrescriptionID={setPrescriptionID} setToastShow={setToastShow} settoastCondition={settoastCondition} />} />
        <Route path="reports" element={<PatientReportsDoctorView healthID={healthID} setPrescriptionID={setPrescriptionID} settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="history" element={<PatientHistoryDoctorView healthID={healthID} setPrescriptionID={setPrescriptionID} settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="profile" element={<DoctorProfile healthID={healthID} settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="addDiagno" element={<AddNewDiagnosis healthID={healthID} setToastShow={setToastShow} settoastCondition={settoastCondition} />} />
        <Route path="prescription" element={<PreviewPrescriptionDoctorView healthID={healthID} prescriptionID={prescriptionID} settoastCondition={settoastCondition} setToastShow={setToastShow} />} /></Route>
        <Route path="admin" element={<AdminSidebar settoastCondition={settoastCondition} setToastShow={setToastShow} />}>
        <Route path="dashboard" element={<AdminDashboard settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="doctorslist" element={<DoctorList settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="patientslist" element={<PatientList settoastCondition={settoastCondition} setToastShow={setToastShow} />} />
        <Route path="registerdoctor" element={<RegisterDoctor settoastCondition={settoastCondition} setToastShow={setToastShow} />} /></Route>
        <Route path="/Appointment" element={<Appointment/>} ></Route>
        <Route path="/AppointmentList" element={<AppointmentList/>} ></Route>
        <Route path="*" element={<Page404 />} />
        </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
