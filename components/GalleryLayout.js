import React from "react";
import { useRouter } from "next/router";
import Container from "./Container";

const GalleryLayout = ({ children, title = "Title" }) => {
  const router = useRouter();

  return (
    <>
      <Container>
        <header className="flex justify-between my-10 items-center">
          <button
            className="text-white nav-text px-10 py-2 rounded-md border border-gray-100 hover:bg-white hover:text-gray-800"
            onClick={() => router.push("/")}
          >
            Go Back
          </button>
          <h1 className="text-gray-200 nav-text text-3xl">{title}</h1>
        </header>
        {children}
      </Container>
    </>
  );
};

export default GalleryLayout;
