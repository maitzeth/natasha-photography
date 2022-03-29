import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Cloe, Practica Editorial, Escuela AF">
      <GalleryGrid
        images={[
          "/fashion/5/0.jpg",
          "/fashion/5/1.jpg",
          "/fashion/5/2.jpg",
          "/fashion/5/3.jpg",
          "/fashion/5/4.jpg",
        ]}
      />
    </GalleryLayout>
  );
};

export default index;
