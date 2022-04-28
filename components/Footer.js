import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between h-[75px] md:h-[50px] text-xs py-5 md:py-0">
      <p className="text-white">
        © {new Date().getFullYear()} Natasha Villamizar, All Rights Reserved
      </p>
      <p className="text-white flex items-center">
        Built with <BsFillSuitHeartFill className="text-red-600 h-3 w-3 mx-3" />{" "}
        by{"  "}
        <a
          href="https://andreivan.me/"
          target="_blank"
          className="ml-1"
          rel="nofollow noopener noreferrer"
        >
          André Iván
        </a>
      </p>
    </footer>
  );
};

export default Footer;
