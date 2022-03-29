import React from "react";
import GalleryItem from "./GalleryItem";
import Masonry from "react-masonry-css";

const GalleryGrid = ({ images }) => {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, key) => (
        <GalleryItem key={key} src={image} />
      ))}
    </Masonry>
  );
};

export default GalleryGrid;
