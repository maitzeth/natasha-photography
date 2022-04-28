import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import Container from "../components/Container";
import NavCategory from "../components/NavCategory";

const DragIconWithNoSSR = dynamic(() => import("../components/DragIcon"), {
  ssr: false,
});

const HomeLayout = ({ children }) => {
  return (
    <Container verticalCentered>
      <NavCategory />
      {children}
      <DragIconWithNoSSR />
    </Container>
  );
};

export default HomeLayout;
