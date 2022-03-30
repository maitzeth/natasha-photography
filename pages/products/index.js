import React from "react";
import Container from "../../components/Container";
import NavCategory from "../../components/NavCategory";
import CategoryItem from "../../components/CategoryItem";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import DragIcon from "../../components/DragIcon";

const index = () => {
  return (
    <Container isFlex verticalCentered>
      <NavCategory />
      <ScrollingCarousel className="scrolling-carousel">
        <CategoryItem
          image={"/products/1/0.jpg"}
          to="/products/vacaciones-en-roma"
        />
      </ScrollingCarousel>
      <DragIcon />
    </Container>
  );
};

export default index;
