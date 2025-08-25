"use client";

import { useTheme } from "../theme/ThemeContext";
import { routes } from "@/routes/routes";
import Link from "next/link";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuToggle, setMenuToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navList = [
    {
      label: "Home",
      path: routes.homepage.root,
    },
    {
      label: "Projects",
      path: routes.homepage.projects,
    },
    {
      label: "About-me",
      path: routes.homepage.about_me,
    },
    {
      label: "Contacts",
      path: routes.homepage.contacts,
    },
  ];

  return (
    <>
      <header
        className={`py-3 fixed w-full z-50 top-0 transition-all duration-300 ${
          theme === "dark" ? "bg-light-black" : "bg-[#f3f3f3]"
        } ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 lg:col-span-4">
              <Link href={routes.homepage.root || "/"}>
                <h3 className="text-primary z-40 relative mb-0">
                  [#
                  <span className="dark:text-white text-black">
                    SURAJ MAHTO
                  </span>
                  ]
                </h3>
              </Link>
            </div>
            <div className="col-span-4 lg:col-span-8 flex  gap-20 justify-end items-center ">
              <div
                className={`${
                  menuToggle === true ? "left-0" : "left-full"
                } transition-all fixed lg:left-0 z-10 lg:relative ${
                  theme === "dark" ? "bg-light-black" : "bg-[#f3f3f3]"
                } lg:bg-inherit inset-0 text-black lg:text-inherit`}
              >
                <div className="max-w-7xl mx-auto px-6 mt-[80px] lg:mt-0">
                  <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                    {navList?.map((list, index) => {
                      return (
                        <li
                          className={`${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                          key={index}
                        >
                          <Link href={list?.path ?? "#"}>
                            <span className="text-primary">#</span>
                            {list.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex gap-6">
                <button
                  className="cursor-pointer z-50 relative"
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? (
                    <MdOutlineLightMode className="text-black dark:text-white size-6" />
                  ) : (
                    <MdDarkMode className="text-black dark:text-white size-6" />
                  )}
                </button>
                <button
                  onClick={() => setMenuToggle(!menuToggle)}
                  className="block lg:hidden z-50"
                >
                  {menuToggle === true ? (
                    <RxCross2 className=" text-black dark:text-white size-6 block lg:hidden" />
                  ) : (
                    <BsList className="text-black dark:text-white size-6 block lg:hidden" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
