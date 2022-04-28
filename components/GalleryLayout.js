import React from "react";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

const GalleryLayout = ({ children, title = "Title" }) => {
  const router = useRouter();

  return (
    <>
      <header className="flex justify-between my-10 items-center space-x-2 container mx-auto px-4 md:px-0">
        <button
          className="text-white nav-text px-10 py-2 rounded-md border border-gray-100 hover:bg-white hover:text-gray-800"
          onClick={() => router.push("/")}
        >
          <BsArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-gray-200 nav-text text-3xl text-right">{title}</h1>
      </header>
      {children}
    </>
  );
};

export default GalleryLayout;
