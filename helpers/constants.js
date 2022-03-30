import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const socialMedia = [
  {
    href: "https://www.instagram.com/nashdfg/",
    darkicon: (
      <FaInstagram className="w-6 h-6 text-gray-700 hover:text-gray-900" />
    ),
    lighticon: (
      <FaInstagram className="w-6 h-6 text-gray-300 hover:text-white" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/natvillamizarph/",
    darkicon: (
      <FaLinkedinIn className="w-6 h-6 text-gray-700 hover:text-gray-900" />
    ),
    lighticon: (
      <FaLinkedinIn className="w-6 h-6 text-gray-300 hover:text-white" />
    ),
  },
];

export const categoryMenu = [
  {
    label: "Fashion",
    to: "/",
  },
  {
    label: "Portraits",
    to: "/portraits",
  },
  {
    label: "Products",
    to: "/products",
  },
];
