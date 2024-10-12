import React from "react";
import img1 from "../assets/Consultancy.png";
import img2 from "../assets/online-course.png";
const Service = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-black text-center font-bold text-6xl pt-5">
          Services
        </h1>
        <div className=" grid grid-cols-3 w-3/4 mx-auto gap-8 my-16">
          <div className=" shadow-2xl w-70  flex flex-col ">
            <img src={img1} className="w-28 mx-auto mt-7 " />
            <h2 className="font-bold text-2xl ml-auto mr-auto mt-5">
              Consultancy
            </h2>
            <p className=" px-6 py-6 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              facilis fugit. Corrupti iure esse molestias, amet quos, tempora in
              libero rem magni fuga cupiditate voluptate! Unde sit laboriosam
              ipsa repudiandae!
            </p>
          </div>
          <div className=" shadow-2xl  w-70  ">
            <img src={img2} className="w-32 mt-9 mx-auto " />
            <h2 className="font-bold text-2xl ml-20 mt-7">Online Course</h2>
            <p className=" px-6 py-6 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              facilis fugit. Corrupti iure esse molestias, amet quos, tempora in
              libero rem magni fuga cupiditate voluptate! Unde sit laboriosam
              ipsa repudiandae!
            </p>
          </div>
          <div className=" shadow-2xl w-70   ">
            <img src={img2} className="w-32 mt-9 mx-auto " />
            <h2 className="font-bold text-2xl ml-20 mt-7">Online Course</h2>
            <p className=" px-6 py-6 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              facilis fugit. Corrupti iure esse molestias, amet quos, tempora in
              libero rem magni fuga cupiditate voluptate! Unde sit laboriosam
              ipsa repudiandae!
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-2 w-3/4 mx-auto gap-8 my-24">
          <div className=" shadow-2xl w-50%  flex flex-col ">
            <img src={img1} className="w-28 mx-auto mt-7 " />
            <h2 className="font-bold text-2xl ml-auto mr-auto mt-5">
              Consultancy
            </h2>
            <p className=" px-6 py-6 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              facilis fugit. Corrupti iure esse molestias, amet quos, tempora in
              libero rem magni fuga cupiditate voluptate! Unde sit laboriosam
              ipsa repudiandae!
            </p>
          </div>
          <div className=" shadow-2xl  w-50% flex flex-col  ">
            <img src={img2} className="w-32 mt-9 mx-auto " />
            <h2 className="font-bold text-2xl text-center mt-7">
              Online Course
            </h2>
            <p className=" px-6 py-6 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              facilis fugit. Corrupti iure esse molestias, amet quos, tempora in
              libero rem magni fuga cupiditate voluptate! Unde sit laboriosam
              ipsa repudiandae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
