import React from "react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryItem = ({ image, to = "" }) => {
  const imageItem = useRef(null);

  return (
    <section className="gallery-item" ref={imageItem}>
      <Link href={to}>
        <a>
          <img
            src={image}
            alt={`photopgraphy ${to}`}
            className="block max-w-full h-auto"
          />
        </a>
      </Link>
    </section>
  );
};

export default CategoryItem;
