import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home"); // Default active link
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Define the sections and their corresponding links
      const sections = {
        home: document.getElementById("home"),
        about: document.getElementById("about"),
        services: document.getElementById("services"),
        works: document.getElementById("works"),
        clients: document.getElementById("clients"),
        team: document.getElementById("team"),
        contact: document.getElementById("contact"),
      };

      // Find the active section based on scroll position
      let activeSection = "home";
      for (const section in sections) {
        if (sections[section]) {
          const sectionTop = sections[section].offsetTop;
          const sectionBottom = sectionTop + sections[section].offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            activeSection = section;
            break;
          }
        }
      }

      // Update the active link
      setActiveLink(activeSection);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg z-50 dark:text-gray-400 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex font-bold text-xl items-center">
            DANIELS
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${menuOpen ? "block" : "hidden"} md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex  space-x-5 text-center text-sm lg:text-base">
              <li className="m-2">
                <a
                  className={`px-0 ${activeLink === "home" ? "active" : ""}`}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="m-2">
                <a
                  className={`px-0 ${activeLink === "about" ? "active" : ""}`}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="m-2">
                <a
                  className={`px-0 ${
                    activeLink === "services" ? "active" : ""
                  }`}
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li className="m-2">
                <a
                  className={`px-0 ${activeLink === "works" ? "active" : ""}`}
                  href="#works"
                >
                  Works
                </a>
              </li>
              <li className="m-2">
                <a
                  className={`px-0 ${activeLink === "clients" ? "active" : ""}`}
                  href="#clients"
                >
                  Clients
                </a>
              </li>
              {/* <li className="m-2">
                <a
                  className={`px-0 ${activeLink === "team" ? "active" : ""}`}
                  href="#team"
                >
                  Team
                </a>
              </li>
              <li className="m-2">
                <a
                  className={`px-0 ${activeLink === "contact" ? "active" : ""}`}
                  href="#contact"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
