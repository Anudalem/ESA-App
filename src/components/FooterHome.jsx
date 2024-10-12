import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa6";
import { Input } from "@nextui-org/react";
const FooterHome = () => {
  return (
    <footer className="  bg-blue  ">
      <div className=" flex justify-around">
        <div className="py-10  text-white">
          <ul className=" ulcontact  ">
            <li>Services</li>
            <li>Courses</li>
            <li>Degital library</li>
            <li>Home Schooling</li>
            <li>Educational Consultancy</li>
            <li>Tutoring</li>
            <br />
            <ul className="  flex gap-2 ">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaPaperPlane />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li></li>
            </ul>
            <li>Terms and conditions</li>
          </ul>
        </div>
        <div className=" text-white text-lg">
          <h3>Get in touch with us</h3>
          <ul>
            <li>
              {" "}
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input type="email" label="Email" className=" border-white" />
                {/* <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                /> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
