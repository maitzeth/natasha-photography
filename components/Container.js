import React from "react";
import classNames from "classnames";

const Container = ({
  children,
  refEl,
  verticalCentered = false,
  isFlex = false,
}) => {
  const ContainerClasses = classNames(
    "overflow-x-hidden gallery-wrapper max-w-7xl mx-auto relative px-4",
    {
      "items-center": verticalCentered,
      flex: isFlex,
    }
  );

  return (
    <main className={ContainerClasses} ref={refEl}>
      {children}
    </main>
  );
};

export default Container;
