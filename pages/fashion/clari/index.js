import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Clari, Practica Editorial, Escuela AF">
      <GalleryGrid
        images={[
          "/fashion/4/0.jpg",
          "/fashion/4/1.jpg",
          "/fashion/4/2.jpg",
          "/fashion/4/3.jpg",
          "/fashion/4/4.jpg",
          "/fashion/4/5.jpg",
          "/fashion/4/6.jpg",
          "/fashion/4/7.jpg",
          "/fashion/4/8.jpg",
          "/fashion/4/9.jpg",
          "/fashion/4/10.jpg",
          "/fashion/4/11.jpg",
          "/fashion/4/12.jpg",
        ]}
      />
    </GalleryLayout>
  );
};

export default index;
