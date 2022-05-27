import React from "react";
import GalleryGrid from "../../../components/GalleryGrid";
import GalleryLayout from "../../../components/GalleryLayout";

const index = () => {
  const arrayImages = [...Array(15).keys()].map(
    (number) => `/fashion/7/Sol-Book-${number + 1}.jpg`
  );

  return (
    <GalleryLayout title="Sol, Fashion Book">
      <GalleryGrid images={arrayImages} />
    </GalleryLayout>
  );
};

export default index;
