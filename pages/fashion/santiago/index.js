import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Santiago, Practica Editorial, Escuela AF">
      <GalleryGrid
        images={[
          "/fashion/3/0.jpg",
          "/fashion/3/1.jpg",
          "/fashion/3/2.jpg",
          "/fashion/3/3.jpg",
          "/fashion/3/4.jpg",
          "/fashion/3/5.jpg",
          "/fashion/3/6.jpg",
        ]}
      />
    </GalleryLayout>
  );
};

export default index;
