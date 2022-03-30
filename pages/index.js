import NavCategory from "../components/NavCategory";
import CategoryItem from "../components/CategoryItem";
import Container from "../components/Container";
import DragIcon from "../components/DragIcon";

import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const Home = () => {
  return (
    <Container isFlex verticalCentered>
      <NavCategory />
      <ScrollingCarousel className="scrolling-carousel">
        <CategoryItem image={"/fashion/1/0.jpg"} to="/fashion/sofia" />
        <CategoryItem image={"/fashion/2/0.jpg"} to="/fashion/yuli" />
        <CategoryItem image={"/fashion/3/0.jpg"} to="/fashion/santiago" />
        <CategoryItem image={"/fashion/4/0.jpg"} to="/fashion/clari" />
        <CategoryItem image={"/fashion/5/0.jpg"} to="/fashion/cloe" />
        <CategoryItem image={"/fashion/6/0.jpg"} to="/fashion/camila" />
      </ScrollingCarousel>
      <DragIcon />
    </Container>
  );
};

export default Home;
