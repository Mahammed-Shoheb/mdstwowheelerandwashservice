"use client";
import React, { useEffect, useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import Image from "next/image";
import logo from "../assests/logo.png";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("/");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const closeMenu = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <header className="w-full z-10 fixed bg-[#111]">
      <nav className="max-width-container py-2 sm:py-4 lg:py-4 sm:items-center flex flex-col  sm:flex-row justify-between">
        <div className="flex justify-between items-center">
          <Image
            src={logo}
            alt="MDS Two Wheeler And Water Service"
            className="w-40 sm:w-52 h-auto sm:h-10 md:h-auto object-cover"
          />
          <div className="flex justify-center items-center gap-2">
            <a
              className="border-2 p-2 sm:hidden rounded-md bg-transparent flex justify-center items-center gap-2 text-white"
              href="tel:+917022355919"
            >
              <BsFillTelephoneOutboundFill className="text-white" />
              <span className="hidden">+91-7022355919</span>
            </a>
            <button className="block sm:hidden" onClick={closeMenu}>
              {isNavbarOpen ? (
                <ImMenu3 className="text-4xl text-white" />
              ) : (
                <ImMenu4 className="text-4xl text-white" />
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <ul
            className={`flex ${
              isNavbarOpen
                ? "h-auto transition-all duration-100 ease-linear"
                : "h-0"
            } flex-col sm:flex-row gap-4 sm:gap-8 sm:h-auto overflow-hidden mt-2 sm:mt-0 w-full sm:w-auto`}
          >
            {["Home", "About", "Services", "Contact"].map((section, index) => {
              return (
                <li
                  key={section + index}
                  className="border-b sm:border-none px-2 py-2 sm:p-0"
                >
                  <a
                    onClick={() => setIsNavbarOpen(false)}
                    href={`#${section.toLowerCase().trim()}`}
                    className={`tracking-wider font-semibold uppercase text-white hover:text-blue-600 custom-transition ${
                      (section.toLocaleLowerCase().trim() ==
                        currentHash.slice(1) ||
                        (currentHash == "" &&
                          section.toLowerCase().trim() == "home")) &&
                      "border-b-2 border-blue-500 scale-110"
                    }`}
                  >
                    {section}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            className="border-2 hidden sm:flex p-2 sm:py-1 sm:px-2 rounded-md bg-transparent  justify-center items-center gap-2 text-white"
            href="tel:+917022355919"
          >
            <BsFillTelephoneOutboundFill className="text-white" />
            <span className="sm:hidden md:block">+91-7022355919</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// bg-black/5 drop-shadow-md backdrop-blur-xl
