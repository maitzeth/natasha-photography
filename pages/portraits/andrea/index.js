import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  return (
    <GalleryLayout title="Andrea">
      <GalleryGrid
        images={[
          "/portraits/5/0.jpg",
          "/portraits/5/1.jpg",
          "/portraits/5/2.jpg",
        ]}
      />
    </GalleryLayout>
  );
};

export default index;
