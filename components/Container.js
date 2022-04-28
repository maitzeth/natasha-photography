import React from "react";
import classNames from "classnames";

const Container = ({
  children,
  refEl,
  verticalCentered = false,
  isFlex = false,
  className,
}) => {
  const ContainerClasses = classNames(
    "overflow-x-hidden gallery-wrapper mx-auto relative",
    className,
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
