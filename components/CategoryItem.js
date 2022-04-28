import React from "react";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CategoryItem = ({ image, to = "" }) => {
  const imageItem = useRef(null);
  const router = useRouter();

  const { length, [length - 1]: parsedTo } = to.split("/");

  return (
    <section className="gallery-item" ref={imageItem}>
      <Link href={to}>
        <a>
          <img
            src={image}
            alt={`a photography of ${parsedTo}`}
            className="block max-w-full h-auto"
          />
        </a>
      </Link>
    </section>
  );
};

export default CategoryItem;
