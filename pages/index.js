import CategoryItem from "../components/CategoryItem";
import HomeLayout from "../components/HomeLayout";
import useHorizontalScroll from "../hooks/useHorizontalScroll";

const Home = () => {
  const { ref } = useHorizontalScroll();

  return (
    <HomeLayout>
      <div className="horizontal-scroll" ref={ref}>
        <CategoryItem image={"/fashion/1/0.jpg"} to="/fashion/sofia" />
        <CategoryItem image={"/fashion/2/0.jpg"} to="/fashion/yuli" />
        <CategoryItem image={"/fashion/3/0.jpg"} to="/fashion/santiago" />
        <CategoryItem image={"/fashion/4/0.jpg"} to="/fashion/clari" />
        <CategoryItem image={"/fashion/5/0.jpg"} to="/fashion/cloe" />
        <CategoryItem image={"/fashion/6/0.jpg"} to="/fashion/camila" />
      </div>
    </HomeLayout>
  );
};

export default Home;
