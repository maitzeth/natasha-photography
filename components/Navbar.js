import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "../helpers/constants";

const Navbar = () => {
  return (
    <nav className="container mx-auto justify-between px-4 flex">
      <ul className="flex items-center h-20 space-x-2">
        <li className="flex mr-5">
          <Link href="/">
            <a>
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
        </li>
        <li className="hidden md:block">
          <Link href="/">
            <a className="text-gray-300 hover:text-white px-4 py-2 nav-text">
              Home
            </a>
          </Link>
        </li>
      </ul>

      <ul className="flex items-center space-x-5 md:space-x-2">
        {socialMedia.map((el, index) => (
          <li key={index}>
            <a href={el.href} target="_blank" rel="noopener noreferrer">
              {el.lighticon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
