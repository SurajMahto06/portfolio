import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="pt-15 pb-6 border-t-1 border-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-12 sm:col-span-6 text-center sm:text-left">
              <h3 className="text-primary">[#<span className="dark:text-white text-black">SURAJ KU. MAHTO</span>]</h3>
              <p>A frontend developer who treats every <span className="text-white">pixel</span>  as a detail and every interaction as an experience.”</p>
            </div>
            <div className="col-span-12 sm:col-span-4 sm:col-start-9">
              <div className="w-fit mx-auto text-center sm:text-left sm:ml-auto sm:mr-0">
              <h3>Media</h3>
              <div className="flex items-center gap-4">
                 <Link href="tel:6201231448" target="_blank"><IoIosCall fontSize={30} className="text-grey"/></Link>
                 <Link href="mailto:surajcbsa06@gmail.com" target="_blank"><MdMail fontSize={30} className="text-grey" /></Link>
                 <Link href="https://github.com/SurajMahto06" target="_blank"><FaGithub fontSize={30} className="text-grey"/></Link>
              </div>
              </div>
            </div>
            <div className="col-span-12 text-center pt-10">
                <p className="mb-0">© 2025 All rights reserved. Made by <span className="text-primary">[#<strong className="dark:text-white text-black font-normal" >Suraj Ku. Mahto</strong>]</span></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
