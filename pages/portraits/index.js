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
        <CategoryItem image={"/portraits/1/0.jpg"} to="/portraits/santiago" />
        <CategoryItem image={"/portraits/2/0.jpg"} to="/portraits/natasha" />
        <CategoryItem image={"/portraits/3/0.jpg"} to="/portraits/daniel" />
        <CategoryItem image={"/portraits/4/0.jpg"} to="/portraits/cloe" />
        <CategoryItem image={"/portraits/5/1.jpg"} to="/portraits/andrea" />
        <CategoryItem image={"/portraits/6/0.jpg"} to="/portraits/jennie" />
      </ScrollingCarousel>
      <DragIcon />
    </Container>
  );
};

export default index;
