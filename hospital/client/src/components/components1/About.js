import Footer from "./Footer";
import Navbar from "./Navbar";
import name from "../../assets/img/dashboard/admin-user.png";
import email from "../../assets/img/dashboard/admin-email.png";
import admin_1 from "../../assets/img/dashboard/admin-1.jpg";
import admin_2 from "../../assets/img/dashboard/admin-2.jpg";
import admin_3 from "../../assets/img/dashboard/admin-3.jpg";
import admin_git from "../../assets/img/dashboard/admin-git.png";
import admin_insta from "../../assets/img/dashboard/admin-insta-2.png";
import admin_linkedin from "../../assets/img/dashboard/admin-linkedin.png";
import { BsPerson } from "react-icons/bs";
const About = () => {
  return (
    <div className="body bg-purple-300 font-lato  bg-opacity-25 overflow-x-hidden lg:h-screen max-h-min flex flex-col h-screen">
      <Navbar></Navbar>

      <div className="font-lato over">
       <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-4">
          <h2 className="text-2xl font-lato font-semibold mb-2">Our Mission</h2>
          <p className="font-lato">

        "At MAHD, our mission is to provide compassionate, high-quality healthcare that enhances the well-being of our community. We are dedicated to delivering exceptional medical services with integrity, empathy, and a commitment to excellence.

        Our Goals:
        1. Patient-Centered Care: We prioritize the needs and preferences of our patients, offering personalized healthcare solutions that promote healing, comfort, and respect.

        2. Clinical Excellence: We continuously strive for excellence in medical care by investing in state-of-the-art technology, research, and professional development to ensure the highest standards of clinical practice.

        3. Accessibility and Inclusivity: We are committed to providing equitable access to healthcare for all members of our community, regardless of their background, culture, or socioeconomic status.

        4. Compassionate Service: Our staff is driven by empathy and kindness, ensuring that every patient's journey is met with understanding, support, and a caring touch.

        5. Community Engagement: We actively engage with our community to promote health education, preventive care, and wellness programs, fostering a healthier and more informed population.

        6. Sustainability: We aim to reduce our environmental footprint, promote sustainability, and contribute to the well-being of both our patients and the planet.

        By embracing these core principles, MAHD strives to be a beacon of hope and healing, where every patient feels valued and cared for. Our mission is not just about treating illnesses; it's about promoting a better and healthier life for everyone we serve."
          </p>
        </div>
        <div>
          <h2 className="text-2xl flex justify-evenly font-semibold mb-2">Our Values</h2>
          <ul>
            <li className="mb-2 flex justify-evenly">Compassion</li>
            <li className="mb-2 flex justify-evenly">Excellence</li>
            <li className="mb-2 flex justify-evenly">Integrity</li>
            <li className="mb-2 flex justify-evenly">Innovation</li>
          </ul>
        </div>
      </div>
        <div className="">
          <div>
            <h1 className="flex justify-center font-lato font-bold text-3xl">
               Developers    
           </h1>
            <div className=" grid grid-cols-4 ml-20 mt-12 ">
              <div className="shadow-xl border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-2xl bg-white">
                <div className="flex justify-center">
                  <img
                    src={admin_1}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full "
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Muralidhar Maddali</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">saimuralidhar2004@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://instagram.com/mr_muralidhar___?igshid=OGQ5ZDc2ODk2ZA==/">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://instagram.com/mr_muralidhar___?igshid=OGQ5ZDc2ODk2ZA==/">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="https://instagram.com/mr_muralidhar___?igshid=OGQ5ZDc2ODk2ZA==/">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shadow-xl border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-2xl bg-white">
                <div className="flex justify-center">
                  <img
                    src={admin_2}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full "
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Aakash Gajavalli</h1>
                  </div>
                  <div className="flex justify-center mt-2 ">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">aakashgajavalli@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://instagram.com/nani_akash_442?igshid=OGQ5ZDc2ODk2ZA==">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://instagram.com/nani_akash_442?igshid=OGQ5ZDc2ODk2ZA==">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="https://instagram.com/nani_akash_442?igshid=OGQ5ZDc2ODk2ZA==">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shadow-xl border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-2xl bg-white">
                <div className="flex justify-center">
                  <img
                    src={admin_3}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full"
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Naga venkata durga Hiranmaye Konatam</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">hiranmayekonatam@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://instagram.com/mr_muralidhar___?igshid=OGQ5ZDc2ODk2ZA==/">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://instagram.com/mr_muralidhar___?igshid=OGQ5ZDc2ODk2ZA==/">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="https://instagram.com/mr_muralidhar___?igshid=OGQ5ZDc2ODk2ZA==/">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shadow-xl border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-2xl bg-white">
                <div className="flex justify-center">
                  <img
                    src={<BsPerson/>}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full "
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Devika Naga sai Ponnam</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-5 mt-1" alt="email"></img>
                    <h4 className="ml-0">ponnamdevikanagasai30@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://instagram.com/mr_muralidhar___?igshid=OGQ5ZDc2ODk2ZA==/">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://instagram.com/mr_muralidhar___?igshid=OGQ5ZDc2ODk2ZA==/">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="https://instagram.com/mr_muralidhar___?igshid=OGQ5ZDc2ODk2ZA==/">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
      </div>
  );
};

export default About;
