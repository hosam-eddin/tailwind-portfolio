import React from "react";
import p1 from "../images/p1 (1).jpg";
import p2 from "../images/p1 (2).jpg";
import p3 from "../images/p1 (3).jpg";
import p4 from "../images/p1 (4).jpg";
import p5 from "../images/p1 (5).jpg";
import p6 from "../images/p1 (6).jpg";
export default function WorkCombo01() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="relative group">
        <img src={p1} alt="" className="w-full" />
        <div className="group bg-white opacity-0 group-hover:opacity-100 absolute top-1 bottom-1 left-1 right-1 p-1 flex justify-center items-center transition-all duration-700 ">
          <div className="space-y-10 group-hover:space-y-2 ">
            <h4 className="text-2xl font-bold text-center transition-all duration-700">WEB DESIGN</h4>
            <ul className="list-none flex justify-center space-x-2 transition-all duration-700">
              <li>
                <a href="#" className="bg-black rounded-full block w-[35px] h-[35px] flex items-center justify-center  hover:bg-gray-700" >
                  <i className="fa fa-chain-broken text-white " />
                </a>
              </li>
              <li>
                <a href="#" className="bg-black rounded-full block w-[35px] h-[35px] flex items-center justify-center hover:bg-gray-700">
                  <i className="fa fa-search-plus text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative group">
        <img src={p2} alt="" className="w-full" />
        <div className="group bg-white opacity-0 group-hover:opacity-100 absolute top-1 bottom-1 left-1 right-1 p-1 flex justify-center items-center transition-all duration-700 ">
          <div className="space-y-10 group-hover:space-y-2 ">
            <h4 className="text-2xl font-bold text-center transition-all duration-700">WEB DESIGN</h4>
            <ul className="list-none flex justify-center space-x-2 transition-all duration-700">
              <li>
                <a href="#" className="bg-black rounded-full block w-[35px] h-[35px] flex items-center justify-center  hover:bg-gray-700" >
                  <i className="fa fa-chain-broken text-white " />
                </a>
              </li>
              <li>
                <a href="#" className="bg-black rounded-full block w-[35px] h-[35px] flex items-center justify-center hover:bg-gray-700">
                  <i className="fa fa-search-plus text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative group">
        <img src={p5} alt="" className="w-full" />
        <div className="group bg-white opacity-0 group-hover:opacity-100 absolute top-1 bottom-1 left-1 right-1 p-1 flex justify-center items-center transition-all duration-700 ">
          <div className="space-y-10 group-hover:space-y-2 ">
            <h4 className="text-2xl font-bold text-center transition-all duration-700">WEB DESIGN</h4>
            <ul className="list-none flex justify-center space-x-2 transition-all duration-700">
              <li>
                <a href="#" className="bg-black rounded-full block w-[35px] h-[35px] flex items-center justify-center  hover:bg-gray-700" >
                  <i className="fa fa-chain-broken text-white " />
                </a>
              </li>
              <li>
                <a href="#" className="bg-black rounded-full block w-[35px] h-[35px] flex items-center justify-center hover:bg-gray-700">
                  <i className="fa fa-search-plus text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
