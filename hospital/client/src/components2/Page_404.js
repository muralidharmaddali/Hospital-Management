import { Link } from "react-router-dom";
import img_404 from "../assets/img/dashboard/404_page.png";
import Footer from "../components/components1/Footer";

const Page_404 = () => {
  return (
    <div className="w-screen h-screen bg-lime-200">
      <img src={img_404} alt="no page" className="mx-auto w-fit h-4/6 my-12" />
      <h1 className="font-lato font-bold font flex justify-center py-3">
        Page you are searching for doesn't exist!!!
      </h1>
      <div className="flex font-lato bg-cyan-400 px-2 w-fit rounded h-10 items-center mx-auto hover:bg-gray-100">
        <Link to="/">
          <button className="font-bold px-2">Back to Home</button>
        </Link>
      </div>

      <div className="h-2/12 mt-2">
        <Footer />
      </div>
    </div>
  );
};

export default Page_404;
