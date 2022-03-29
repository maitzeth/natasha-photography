import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Jennie">
      <GalleryGrid images={["/portraits/6/0.jpg"]} />
    </GalleryLayout>
  );
};

export default index;
