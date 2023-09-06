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

  console.log(pathname === "/contact");

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
    <div id="home" className="bg-red-500">
    <div className="md:container  px-6 md:px-0 lg:border-none border-b-[1px] h-[65px] lg:h-[75px] lg:py-2">
      <div className="flex items-center justify-between lg:block">
        <div className="flex justify-between items-center">
          <div className="">
            <Image
              width={40}
              height={23}
              onClick={() => router.push("/")}
              src="/logo.png"
              className="cursor-pointer"
              alt="Logo"
              priority="1"
            />
          </div>

          {pathname === "/contact" ? (
            <div className="hidden lg:flex ">
              <a
                href="tel:+972507546969"
                className="text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300"
              >
                (972) 50-754-6969
              </a>

              <Link
                href={"/"}
                className="text-white  m-4 cursor-pointer hover:scale-125 ease-in duration-300"
              >
                Home
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex ">
              <a
                href="tel:+972507546969"
                className="text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300"
              >
                (972) 50-754-6969
              </a>
              <Link
                href={"/contact"}
                // onClick={() => router.push("/contact")}
                className="text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300"
              >
                Contact Us
              </Link>

              <div className="text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300">
                <a href="#team">Reviews from Google</a>
              </div>
              <div
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className="text-white relative m-4 cursor-pointer flex items-center hover:scale-125 ease-in duration-300"
                ref={dropDownRef}
              >
                <div>
                  <a href="#onus">On Us</a>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="white"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {dropDownOpen && (
                  <div className="absolute top-[25px] -left-4 z-10 w-32 bg-secondary rounded divide-y divide-gray-100 shadow ">
                    <ul className="py-1 text-sm text-white">
                      <li>
                        <a href="#team" className="block py-2 px-4  ">
                          Our Team
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="text-white m-4 cursor-pointer hover:scale-125 ease-in duration-300">
                <a href="#Specialty">Our Specialty</a>
              </div>
              <Link
                href={"/"}
                className="text-white  m-4 cursor-pointer hover:scale-125 ease-in duration-300"
              >
                Home
              </Link>
            </div>
          )}
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
    {hamburgerOpen && (
      <>
        {pathname === "/contact" ? (
          <div className="absolute  z-50 bg-primary w-full body-font lg:hidden  shadow-headerLight dark:shadow-headerDark z-100 overflow-hidden">
            <div className="md:container ">
              <a
                href="tel:+972507546969"
                className={`text-white cursor-pointer border-b-[1px] block py-2 px-3`}
              >
                (972) 50-754-6969
              </a>

              <Link
                href={"/"}
                className={` text-white  cursor-pointer py-2 px-3`}
              >
                Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="absolute  z-50 bg-primary w-full body-font lg:hidden  shadow-headerLight dark:shadow-headerDark z-100 overflow-hidden">
            <div className="md:container ">
              <a
                href="tel:+972507546969"
                className={`text-white cursor-pointer border-b-[1px] block py-2 px-3`}
              >
                (972) 50-754-6969
              </a>
              <div
                onClick={() => router.push("/contact")}
                className={` text-white  cursor-pointer border-b-[1px] py-2 px-3`}
              >
                Contact Us
              </div>

              <div
                className={`  text-white  cursor-pointer border-b-[1px] py-2 px-3`}
              >
                <a href="#team">Reviews from Google</a>
              </div>
              <div
                className={`  text-white cursor-pointer border-b-[1px] py-2 px-3`}
              >
                <div
                  ref={dropDownRef}
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                  className="text-white relative group  cursor-pointer justify-between flex "
                >
                  <div className="">
                    <a href="#onus">On Us</a>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-1 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                  {dropDownOpen && (
                    <div className="absolute top-[25px]  z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow ">
                      <ul className="py-1 text-sm text-secondary">
                        <li>
                          <a
                            href="#team"
                            className="block py-2 px-4 hover:bg-gray-100 hover:text-primary"
                          >
                            Our Team
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={` text-white  cursor-pointer border-b-[1px] py-2 px-3`}
              >
                <a href="#Specialty">Our Specialty</a>
              </div>
              <div className={` text-white  cursor-pointer py-2 px-3`}>
                <a href="#home">Home</a>
              </div>
            </div>
          </div>
        )}
      </>

      // <div className="absolute  z-50 bg-primary w-full body-font lg:hidden  shadow-headerLight dark:shadow-headerDark z-100 overflow-hidden">
      //   <div className="md:container ">
      //     <a
      //       href="tel:+972507546969"
      //       className={`text-white cursor-pointer border-b-[1px] block py-2 px-3`}
      //     >
      //       (972) 50-754-6969
      //     </a>
      //     <div
      //       onClick={() => router.push("/contact")}
      //       className={` text-white  cursor-pointer border-b-[1px] py-2 px-3`}
      //     >
      //       Contact Us
      //     </div>

      //     <div
      //       className={`  text-white  cursor-pointer border-b-[1px] py-2 px-3`}
      //     >
      //       <a href="#team">Reviews from Google</a>
      //     </div>
      //     <div
      //       className={`  text-white cursor-pointer border-b-[1px] py-2 px-3`}
      //     >
      //       <div
      //         ref={dropDownRef}
      //         onClick={() => setDropDownOpen(!dropDownOpen)}
      //         className="text-white relative group  cursor-pointer justify-between flex "
      //       >
      //         <div className="">
      //           <a href="#onus">On Us</a>
      //         </div>
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="none"
      //           viewBox="0 0 24 24"
      //           strokeWidth={1.5}
      //           stroke="currentColor"
      //           className="w-5 h-5 ml-1 "
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      //           />
      //         </svg>
      //         {dropDownOpen && (
      //           <div className="absolute top-[25px]  z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow ">
      //             <ul className="py-1 text-sm text-secondary">
      //               <li>
      //                 <a
      //                   href="#team"
      //                   className="block py-2 px-4 hover:bg-gray-100 hover:text-primary"
      //                 >
      //                   Our Team
      //                 </a>
      //               </li>
      //             </ul>
      //           </div>
      //         )}
      //       </div>
      //     </div>
      //     <div
      //       className={` text-white  cursor-pointer border-b-[1px] py-2 px-3`}
      //     >
      //       <a href="#Specialty">Our Specialty</a>
      //     </div>
      //     <div className={` text-white  cursor-pointer py-2 px-3`}>
      //       <a href="#home">Home</a>
      //     </div>
      //   </div>
      // </div>
    )}
  </div>
  )
}

export default Navbar