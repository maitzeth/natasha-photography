import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Sofia, Practica Editorial, Escuela AF">
      <GalleryGrid
        images={[
          "/fashion/1/4.jpg",
          "/fashion/1/8.jpg",
          "/fashion/1/2.jpg",
          "/fashion/1/0.jpg",
          "/fashion/1/3.jpg",
          "/fashion/1/5.jpg",
          "/fashion/1/6.jpg",
          "/fashion/1/7.jpg",
          "/fashion/1/1.jpg",
        ]}
      />
    </GalleryLayout>
  );
};

export default index;
