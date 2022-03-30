import React from "react";
import { AiOutlineSwap } from "react-icons/ai";

const DragIcon = () => {
  return (
    <div className="hidden lg:flex space-x-2 items-center fixed bottom-[15vh] left-2/4 -translate-x-2/4">
      <p className="text-white font-oswald">Drag</p>
      <div>
        <AiOutlineSwap className="text-white h-5 w-5" />
      </div>
    </div>
  );
};

export default DragIcon;
