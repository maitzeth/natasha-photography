import CategoryItem from "../components/CategoryItem";
import HomeLayout from "../components/HomeLayout";
import useHorizontalScroll from "../hooks/useHorizontalScroll";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const Home = () => {
  const { ref } = useHorizontalScroll();

  const renderCategoryCollection = () => {
    return (
      <>
        <CategoryItem image={"/fashion/1/0.jpg"} to="/fashion/sofia" />
        <CategoryItem image={"/fashion/2/0.jpg"} to="/fashion/yuli" />
        <CategoryItem image={"/fashion/7/Sol-Book.jpg"} to="/fashion/sol" />
        <CategoryItem image={"/fashion/3/0.jpg"} to="/fashion/santiago" />
        <CategoryItem image={"/fashion/4/0.jpg"} to="/fashion/clari" />
        <CategoryItem image={"/fashion/5/0.jpg"} to="/fashion/cloe" />
        <CategoryItem image={"/fashion/6/0.jpg"} to="/fashion/camila" />
      </>
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

export default Home;
