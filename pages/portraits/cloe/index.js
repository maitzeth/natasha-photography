import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Cloe, Practica Editorial, Escuela AF">
      <GalleryGrid images={["/portraits/4/0.jpg", "/portraits/4/1.jpg"]} />
    </GalleryLayout>
  );
};

export default index;
