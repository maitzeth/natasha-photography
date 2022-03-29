import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Santiago, Practica Editorial, Escuela AF">
      <GalleryGrid images={["/portraits/1/0.jpg", "/portraits/1/1.jpg"]} />
    </GalleryLayout>
  );
};

export default index;
