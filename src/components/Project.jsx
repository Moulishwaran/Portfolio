import React from "react";
import travel from "../assets/tavel.png";
import netflix from "../assets/netflix.png";
import real from "../assets/realestate.jpg";
import youtube from "../assets/youtube.png";

const Work = () => {
  return (
    <div
      name="project"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Project
          </p>
          <p className="py-6">//Check out some of my recent Projectwork</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${travel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Travel Manangement-It's a Full Stack Appication
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://travel-management-webapp.netlify.app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Moulishwaran/TourManag-Frontend"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                NETFLIX-Full Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://netflix-d377e.web.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Moulishwaran/Netflix"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${real})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                RealEstate-Full Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://estate-mern.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Moulishwaran/Realestate"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${youtube})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                YOUTUBE
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://spectacular-cupcake-143c41.netlify.app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Live
                  </button>
                </a>
                <a
                  href="https://github.com/Moulishwaran/Youtube-cone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
