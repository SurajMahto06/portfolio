import Heading from "./ui/Heading";
import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";

const Contact = () => {
  const contactList = [
    {
      id: 1,
      icon: <MdMail />,
      label: "surajcbsa06@gmail.com",
      path: "mailto:surajcbsa06@gmail.com",
    },
    {
      id: 3,
      icon: <IoIosCall />,
      label: "6201231448",
      path: "tel:6201231448",
    },
    {
      id: 2,
      icon: <FaGithub />,
      label: "GitHub",
      path: "https://github.com/SurajMahto06",
    },
  ];

  return (
    <>
      <section className="py-10 lg:py-15">
        <div className="max-w-7xl mx-auto px-6">
          <Heading title="Contacts" />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <p>
                Whether it’s a job opportunity, collaboration, or just a quick
                chat about web development, I’d love to hear from you. Let’s
                build something impactful together. If you have other request or
                question, don’t hesitate to contact me
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="border border-grey p-4 w-fit mx-auto lg:ml-auto lg:mr-0">
                <h6 className="mb-3">Message me here</h6>
                <ul>
                  {contactList?.map((contact) => {
                    const { id, icon, label, path } = contact;
                    return (
                      <li
                        key={id}
                        className="text-grey flex items-center gap-2 mb-2"
                      >
                        <Link
                          className="text-grey flex items-center gap-2"
                          href={path}
                          target="_blank"
                        >
                          {icon}
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
