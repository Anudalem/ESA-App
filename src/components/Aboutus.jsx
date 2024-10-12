import React from "react";
import aboutus from "../assets/about-us.jpg";
import { Image } from "@nextui-org/react";
import Onlinecourse from "../assets/online-course-pic.jpg";
const Aboutus = () => {
  return (
    <div>
      <div className=" flex gap-7  pt-10 my-20 px-36">
        <div className="w-40% ">
          <Image
            isZoomed
            //   width={1000}
            alt="NextUI Fruit Image with Zoom"
            src={aboutus}
            className="motion-preset-slide-right   motion-duration-1500"
          />
        </div>
        <div className="w-3/7">
          <h1 className=" text-black font-black text-6xl text-center pb-7 pt-0">
            Who Are We?
          </h1>
          <div className="ml-6">
            <p>
              &nbsp; &nbsp;ESA is a forward-thinking educational platform
              committed to transforming the learning experience by making
              education accessible, engaging, and relevant for everyone. Our
              diverse team of educators, developers, and innovators collaborates
              to create high-quality content and tools that empower learners at
              all levels.
            </p>
            <p> &nbsp; &nbsp;</p>
            <p>
              &nbsp; &nbsp;We believe in fostering a community where knowledge
              is shared freely and learning is a lifelong journey. Whether
              you're a student looking to master new skills.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex gap-7  py-10 my-20 px-36 bg-slate-200">
        <div className=" w-3/5 flex flex-col  pr-6">
          <h1 className=" text-black font-black text-4xl text-center pb-7 pt-0">
            We Give Best Online Courses, Tutoring, Home Schooling & degital
            library.
          </h1>
          <div className="ml-6 align-middle ">
            <p>
              &nbsp; &nbsp;ESA is a forward-thinking educational platform
              committed to transforming the learning experience by making
              education accessible, engaging, and relevant for everyone. Our
              diverse team of educators, developers, and innovators collaborates
              to create high-quality content and tools that empower learners at
              all levels.
            </p>
            <p> &nbsp; &nbsp;</p>
            <p>
              {/* &nbsp; &nbsp;We believe in fostering a community where knowledge
              is shared freely and learning is a lifelong journey. Whether
              you're a student looking to master new skills. */}
            </p>
          </div>
        </div>
        <div className="w-3/6">
          <Image
            isZoomed
            //   width={1000}
            alt="NextUI Fruit Image with Zoom"
            src={Onlinecourse}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
