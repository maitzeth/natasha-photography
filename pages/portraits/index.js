import React from "react";
import CategoryItem from "../../components/CategoryItem";
import HomeLayout from "../../components/HomeLayout";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";

const index = () => {
  const { ref } = useHorizontalScroll();
  return (
    <HomeLayout>
      <div className="horizontal-scroll" ref={ref}>
        <CategoryItem image={"/portraits/1/0.jpg"} to="/portraits/santiago" />
        <CategoryItem image={"/portraits/2/0.jpg"} to="/portraits/natasha" />
        <CategoryItem image={"/portraits/3/0.jpg"} to="/portraits/daniel" />
        <CategoryItem image={"/portraits/4/0.jpg"} to="/portraits/cloe" />
        <CategoryItem image={"/portraits/5/1.jpg"} to="/portraits/andrea" />
        <CategoryItem image={"/portraits/6/0.jpg"} to="/portraits/jennie" />
      </div>
    </HomeLayout>
  );
};

export default index;
