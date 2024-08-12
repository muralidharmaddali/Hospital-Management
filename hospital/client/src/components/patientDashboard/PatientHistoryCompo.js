import { Link } from "react-router-dom";
import eye from "../../assets/img/dashboard/eye.png";

const PatientHistoryCompo = (props) => {
  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="grid grid-cols-4 font-lato">
      <div>
        <h1>{convertDatetoString(props.prescription.createdAt)}</h1>
      </div>
      <div className="flex">
        <h1>Dr.</h1>
        <h1>{props.prescription.doctor}</h1>
      </div>
      <div>
        <h1>{props.prescription.diagnosis}</h1>
      </div>
      <Link
        to="/patient/prescription"
        onClick={props.setPrescriptionID(props.prescription._id)}
      >
        <div className="flex justify-center bg-cyan-300 py-1 px-3 rounded font-semibold font-lato shadow-lg hover:bg-gray-100 w-2/4   ">
          <img src={eye} alt="veiw" className="h-4 my-auto"></img>
          <button className="font-bold ml-2">Preview </button>
        </div>
      </Link>
    </div>
  );
};

export default PatientHistoryCompo;
