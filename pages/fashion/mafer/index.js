import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Mafer, Fashion Book">
      <GalleryGrid
        images={[
          "/fashion/8/0.jpg",
          "/fashion/8/1.jpg",
          "/fashion/8/2.jpg",
          "/fashion/8/3.jpg",
          "/fashion/8/5.jpg",
          "/fashion/8/6.jpg",
        ]}
      />
    </GalleryLayout>
  );
};

export default index;
