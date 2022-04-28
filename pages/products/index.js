import React from "react";
import CategoryItem from "../../components/CategoryItem";
import HomeLayout from "../../components/HomeLayout";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";

const index = () => {
  const { ref } = useHorizontalScroll();
  return (
    <HomeLayout>
      <div className="horizontal-scroll" ref={ref}>
        <CategoryItem
          image={"/products/1/0.jpg"}
          to="/products/vacaciones-en-roma"
        />
      </div>
    </HomeLayout>
  );
};

export default index;
