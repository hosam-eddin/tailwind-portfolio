import React from "react";
import heroImg from "../images/hero.jpg";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="container m-auto flex justify-center items-center gap-6 py-20 ">

        <div className=" flex items-center justify-between flex-wrap ">
          <div className="sm:w-full md:w-5/12 img-bg relative p-10">
            <img src={heroImg} alt="" className="w-full " />
          </div>
          <div className="sm:w-full md:w-7/12 md:mt-5 space-y-5">
            <h2 className="font-bold text-3xl text-gray-600">About Me.</h2>
            <p className="text-sm text-secondary mb-4">
              UI / UX DESIGNER &amp; WEB DEVELOPER
            </p>
            <p className="text-black-50">
              I am <span className="font-bold">Jerry Daniels</span> Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever It
              has survived not only five centuries, but also the leap into
              electronic but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularized in the 1960s
              with the release of Letraset sheets containing
            </p>
            <div className="flex flex-col gap-5">
              <div className="w-full bg-gray-200 rounded shadow-md  shadow-gray-400 dark:bg-gray-700">
                <div
                  className="bg-gray-900  text-xs font-medium text-blue-100 text-center shadow-inner p-2 shadow-slate-400 leading-none rounded"
                  style={{ width: "95%" }}
                >
                  <ul className="flex justify-between items-center text-white px-4">
                    <li>Web Design</li>
                    <li>95%</li>
                  </ul>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded shadow-md  shadow-gray-400 dark:bg-gray-700">
                <div
                  className="bg-gray-900  text-xs font-medium text-blue-100 text-center shadow-inner p-2 shadow-slate-400 leading-none rounded"
                  style={{ width: "80%" }}
                >
                  <ul className="flex justify-between items-center text-white px-4">
                    <li>Branding</li>
                    <li>80%</li>
                  </ul>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded shadow-md shadow-gray-400 dark:bg-gray-700">
                <div
                  className="bg-gray-900  text-xs font-medium text-blue-100 text-center shadow-inner p-2 shadow-slate-400 leading-none rounded"
                  style={{ width: "90%" }}
                >
                  <ul className="flex justify-between items-center text-white px-4">
                    <li>Development</li>
                    <li>90%</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <button
                type="button"
                class="text-white bg-gray-900 hover:bg-white hover:text-black border border-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition-all duration-300"
              >
                Download CV
              </button>
              <button
                type="button"
                class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
