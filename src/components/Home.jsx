import React from "react";
import AnimationTyping from "./AnimationTyping";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col gap-5 justify-center items-center"
    >
      <h3 className="text-white text-3xl ">Welcome</h3>
      <div>
        <span className="text-white text-4xl font-light">I am </span>
        <span className="text-white font-bold ">
          <AnimationTyping />
        </span>
      </div>
      <ul class="about_links list flex gap-2">
        <li>
          <a href="#">
            <i class="fa-brands fa-facebook-f text-white"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-twitter text-white"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-linkedin-in text-white"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-behance text-white"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-youtube text-white"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}
