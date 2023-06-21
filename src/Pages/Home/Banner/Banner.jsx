import React from "react";
import banner from "../../../assets/banner.jpg";
import "./Banner.css";
import ReactTypingEffect from "react-typing-effect";

const Banner = () => {
  return (
    <div>
      <div className="hero  min-h-screen bg-green-500">
        <div className="hero-content mx-10 flex-col-reverse lg:flex-row-reverse">
          <div className="hidden lg:block mt-10" id="banner-Image">
            <img
              src={banner}
              className="shadow-2xl w-[700px] h-[450px] object-cover"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-white text-5xl font-bold">
              Welcome to Dev Prepared Academy
            </h1>
            <span className="text-white text-5xl font-bold mr-3">Learn</span>
            <ReactTypingEffect
              text={["HTML", "CSS", "React", "Express", "MongoDB"]}
              cursorRenderer={(cursor) => <h1 className="text-purple-600 text-4xl">{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1 className="text-purple-700 text-4xl font-bold">
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h1>
                );
              }}
            />
            <p className="py-6 text-white text-xl font-semibold">
              Dev prepared Academy is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.
            </p>
            <button className="btn btn-primary">Join Us</button>
            <button className="btn btn-neutral ml-4">Explore Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
