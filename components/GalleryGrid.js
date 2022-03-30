import React from "react";
import GalleryItem from "./GalleryItem";
import Masonry from "react-masonry-css";
import useWindowSize from "../hooks/useWindowSize";
import lgZoom from "lightgallery/plugins/zoom";
import dynamic from "next/dynamic";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const GalleryGrid = ({ images }) => {
  const { width } = useWindowSize();

  if (width > 520) {
    return (
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, key) => (
          <LightGallery
            mode="lg-fade"
            plugins={[lgZoom]}
            key={`desktop-gallery-image-${key}`}
          >
            <a data-src={image} className="cursor-pointer">
              <img className="img-responsive" src={image} loading="lazy" />
            </a>
          </LightGallery>
        ))}
      </Masonry>
    );
  }

  return (
    <>
      <LightGallery mode="lg-fade" plugins={[lgZoom]}>
        {images.map((image, key) => (
          <a
            data-src={image}
            className="cursor-pointer mt-2 block"
            key={`mobile-gallery-image-${key}`}
          >
            <img className="img-responsive" src={image} loading="lazy" />
          </a>
        ))}
      </LightGallery>
    </>
  );
};

export default GalleryGrid;
