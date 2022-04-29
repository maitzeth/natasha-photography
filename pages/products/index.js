import React from "react";
import CategoryItem from "../../components/CategoryItem";
import HomeLayout from "../../components/HomeLayout";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const ProductsPage = () => {
  const { ref } = useHorizontalScroll();

  const renderCategoryCollection = () => {
    return (
      <CategoryItem
        image={"/products/1/0.jpg"}
        to="/products/vacaciones-en-roma"
      />
    );
  };

  return (
    <HomeLayout>
      <div className="block md:hidden">
        <ScrollingCarousel>{renderCategoryCollection()}</ScrollingCarousel>
      </div>
      <div className="hidden md:block">
        <div className="horizontal-scroll" ref={ref}>
          {renderCategoryCollection()}
        </div>
      </div>
    </HomeLayout>
  );
};

export default ProductsPage;
