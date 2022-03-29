import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Vacaciones en Roma, Escuela AF">
      <GalleryGrid
        images={["/products/1/0.jpg", "/products/1/1.jpg", "/products/1/2.jpg"]}
      />
    </GalleryLayout>
  );
};

export default index;
