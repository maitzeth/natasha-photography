import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Daniel">
      <GalleryGrid
        images={[
          "/portraits/3/0.jpg",
          "/portraits/3/2.jpg",
          "/portraits/3/1.jpg",
          "/portraits/3/3.jpg",
          "/portraits/3/4.jpg",
        ]}
      />
    </GalleryLayout>
  );
};

export default index;
