import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Natasha">
      <GalleryGrid
        images={[
          "/portraits/2/0.jpg",
          "/portraits/2/2.jpg",
          "/portraits/2/1.jpg",
        ]}
      />
    </GalleryLayout>
  );
};

export default index;
