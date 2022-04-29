import React from "react";
import Masonry from "react-masonry-css";
import useWindowSize from "../hooks/useWindowSize";
import { sizes } from "../utils/devices";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { useRouter } from "next/router";
import useGetModelName from "../hooks/useGetModelName";

const GalleryGrid = ({ images }) => {
  const { width } = useWindowSize();
  const { route } = useRouter();

  const modelName = useGetModelName(route);

  return (
    <>
      <LightgalleryProvider
        lightgallerySettings={{}}
        galleryClassName="my_custom_classname"
      >
        <Masonry
          breakpointCols={width > sizes.md ? 3 : 2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, idx) => {
            return (
              <LightgalleryItem key={idx} src={image} group="0">
                <img
                  src={image}
                  className="img-responsive my-4 cursor-pointer"
                  alt={`a photography number ${idx}`}
                  loading="lazy"
                />
              </LightgalleryItem>
            );
          })}
        </Masonry>
      </LightgalleryProvider>
    </>
  );
};

export default GalleryGrid;
