import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Yuli, Practica Editorial, Escuela AF">
      <GalleryGrid
        images={["/fashion/2/0.jpg", "/fashion/2/1.jpg", "/fashion/2/2.jpg"]}
      />
    </GalleryLayout>
  );
};

export default index;
