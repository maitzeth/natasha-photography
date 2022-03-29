import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { socialMedia } from "../helpers/constants";
import classnames from "classnames";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const openClassnames = classnames(
    "bg-gray-200 fixed top-0 left-0 w-full h-full z-10 space-y-10 flex justify-center flex-col ease-in-out duration-300",
    {
      "translate-x-full": !isOpen,
      "translate-x-0": isOpen,
    }
  );

  return (
    <>
      <nav className="px-3 py-4 flex justify-between items-center MOBILE">
        <div>
          <Link href="/">
            <a className="flex" onClick={handleCloseMenu}>
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                width={200}
                height={35}
                layout="fixed"
                className="block h-auto mx-auto max-w-full"
                priority
              />
            </a>
          </Link>
        </div>
        <div>
          <button type="button" className="p-3" onClick={() => setOpen(true)}>
            <FiMenu className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>
      <div className={openClassnames}>
        <div className="absolute top-1 right-1">
          <button type="button" className="p-4" onClick={() => setOpen(false)}>
            <AiOutlineClose className="w-6 h-6 text-gray-700 hover:text-gray-900" />
          </button>
        </div>
        <ul>
          <li>
            <Link href="/">
              <a
                className="text-gray-700 hover:text-gray-900 px-4 py-2 nav-text text-6xl block nav-text-mobile"
                onClick={handleCloseMenu}
              >
                Home
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/about">
              <a
                className="text-gray-700 hover:text-gray-900 px-4 py-2 nav-text text-6xl block nav-text-mobile"
                onClick={handleCloseMenu}
              >
                About me
              </a>
            </Link>
          </li> */}
        </ul>
        <ul className="flex space-x-2 px-4 py-2">
          {socialMedia.map((el, index) => (
            <li key={index}>
              <a href={el.href} target="_blank" rel="noopener noreferrer">
                {el.darkicon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavMobile;
