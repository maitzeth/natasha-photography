import React from "react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import useGetModelName from "../hooks/useGetModelName";

const CategoryItem = ({ image, to = "" }) => {
  const imageItem = useRef(null);

  const modelName = useGetModelName(to);

  return (
    <section className="gallery-item relative" ref={imageItem}>
      <Link href={to}>
        <a>
          <Image
            src={image}
            alt={`a photography of ${modelName}`}
            layout="fill"
          />
        </a>
      </Link>
    </section>
  );
};

export default CategoryItem;
