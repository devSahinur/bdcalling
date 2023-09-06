"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  // console.log(pathname === "/contact");

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropDownOpen(false);
        }
      }
      ["mousedown", "scroll"].forEach(function (e) {
        document.addEventListener(e, handleClickOutside);
        return () => {
          document.removeEventListener(e, handleClickOutside);
        };
      });
    }, [ref]);
  }

  function closeHamburger() {
    setHamburgerOpen(false);
  }

  const handleNavLink = (path) => () => {
    closeHamburger();
    router.push(path);
  };

  const dropDownRef = useRef(null);
  useOutsideAlerter(dropDownRef);
  return (
    <>
      <div className="bg-secondary">
        <div className=" mx-0 lg:mx-10  px-6 md:px-0 lg:border-none  h-[65px] lg:h-[75px] lg:py-2">
          <div className="flex items-center justify-between lg:block">
            <div className="flex justify-between items-center">
              <div className="mt-3 lg:mt-0">
                <Image
                  width={150}
                  height={100}
                  onClick={() => router.push("/")}
                  src="/bdCalling-Logo.png"
                  className="cursor-pointer"
                  alt="Logo"
                  priority="1"
                />
              </div>

              <div className="hidden lg:flex ">
                <Link
                  href={"/"}
                  className="text-black  hover:text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300"
                >
                  HOME
                </Link>
                <div className="text-black  hover:text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <a href="#services">SERVICES</a>
                </div>

                <div className="text-black  hover:text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <a href="#portfolio">PORTFOLIO</a>
                </div>

                <Link
                  href={"/"}
                  className="text-black  hover:text-white  m-4 cursor-pointer hover:scale-125 ease-in duration-300"
                >
                  ABOUT
                </Link>
              </div>

              <div className="hidden lg:block">
                <button className="bg-primary flex text-white p-3  rounded-xl w-full lg:w-auto">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>{" "}
                  SCHEDULE MEETING
                </button>
              </div>
            </div>
            <div>
              <div>
                {hamburgerOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-[24px] h-[24px] mt-3 lg:hidden text-white cursor-pointer"
                    onClick={() => setHamburgerOpen(!hamburgerOpen)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[24px] h-[24px] mt-3 lg:hidden cursor-pointer"
                    onClick={() => setHamburgerOpen(!hamburgerOpen)}
                  >
                    <path
                      d="M3 12H21M3 6H21M3 18H21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {hamburgerOpen && (
        <>
          <div
            className={`${
              hamburgerOpen && "opacity-100 top-[65px]"
            } absolute opacity-0 top-[-400px] transition-all ease-in z-10 duration-500  bg-secondary pb-3 w-full body-font lg:hidden  shadow-headerLight dark:shadow-headerDark z-100 overflow-hidden`}
          >
            <div className="md:container mx-5 ">
              <Link
                href={"/"}
                className={`text-black hover:text-white cursor-pointer block py-2 px-3`}
              >
                HOME
              </Link>
              <a
                href="#services"
                className={` text-black  hover:text-white block cursor-pointer py-2 px-3`}
              >
                SERVICES
              </a>

              <a
                href="#portfolio"
                className={`  text-black  hover:text-white block  cursor-pointer  py-2 px-3`}
              >
                PORTFOLIO
              </a>
              <div
                className={` text-black  hover:text-white cursor-pointer py-2 px-3`}
              >
                <a href="#about">ABOUT</a>
              </div>
              <div className="flex  justify-center items-center">
                <button className="bg-primary flex justify-between text-white p-3 text-center w-full mx-auto  rounded-xl lg:w-auto">
                  <span></span>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mx-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                    SCHEDULE MEETING
                  </span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
