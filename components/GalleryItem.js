import React from "react";
import lgZoom from "lightgallery/plugins/zoom";
import dynamic from "next/dynamic";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const GalleryItem = ({ src }) => {
  return (
    <LightGallery mode="lg-fade" plugins={[lgZoom]}>
      <a data-src={src} className="cursor-pointer">
        <img className="img-responsive" src={src} loading="lazy" />
      </a>
    </LightGallery>
  );
};

export default GalleryItem;
