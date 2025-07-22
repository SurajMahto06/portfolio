"use client";

import { useTheme } from "../theme/ThemeContext";
import { routes } from "@/routes/routes";
import Link from "next/link";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const navList = [
    {
      label: "Home",
      path: routes.homepage.root,
    },
    {
      label: "Works",
      path: routes.homepage.works,
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
      <section className="py-5">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-4/12">Logo</div>
            <div className="w-8/12 flex gap-20 justify-end items-center ">
              <div className="fixed md:relative bg-white md:bg-inherit inset-0 text-black md:text-inherit ">
                <div className="container mx-auto">
                  <ul className="flex gap-10">
                    {navList?.map((list, index) => {
                      return (
                        <li key={index}>
                          <Link href={list?.path ?? "#"}>
                            <span className="text-purple">#</span>
                            {list.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex gap-6">
                <button className="cursor-pointer" onClick={toggleTheme}>
                  {theme === "dark" ? (
                    <MdOutlineLightMode className="size-6" />
                  ) : (
                    <MdDarkMode className="size-6" />
                  )}
                </button>
                <button className="block md:hidden z-50">
                  <BsList className="text-black size-6 hidden md:block" />
                  <RxCross2 className="text-black size-6 block md:hi" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
