import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Camila, Practica Editorial, Escuela AF">
      <GalleryGrid
        images={["/fashion/6/0.jpg", "/fashion/6/1.jpg", "/fashion/6/2.jpg"]}
      />
    </GalleryLayout>
  );
};

export default index;
