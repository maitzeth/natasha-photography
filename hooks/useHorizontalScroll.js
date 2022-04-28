import { useRef, useEffect } from "react";

const useGalleryHorizontal = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        ref.current.scrollLeft += evt.deltaY;
      });
    }
  }, [ref]);

  return { ref };
};

export default useGalleryHorizontal;
