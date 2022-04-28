import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { useWindowSize } from "@react-hook/window-size";
import { sizes } from "../utils/devices";

const DragIcon = () => {
  const [width] = useWindowSize();
  return (
    <div className="flex space-x-2 items-center justify-center h-[50px]">
      <p className="text-white font-oswald">
        {width > sizes.md ? "Scroll" : "Drag"}
      </p>
      <div>
        <AiOutlineSwap className="text-white h-5 w-5" />
      </div>
    </div>
  );
};

export default DragIcon;
