import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between h-[50px] text-xs">
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
    </div>
  );
};

export default Footer;
