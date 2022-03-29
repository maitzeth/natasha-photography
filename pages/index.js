import { useMount } from "react-use";
import { useRef, useState } from "react";
import NavCategory from "../components/NavCategory";
import CategoryItem from "../components/CategoryItem";
import { categoryMenu } from "../helpers/constants";
import Container from "../components/Container";
import { useRecoilState } from "recoil";
import { selectedCategoryAtom } from "../atoms/category";
import { AiOutlineSwap } from "react-icons/ai";

const Home = () => {
  const [selectedCategory, setCategory] = useRecoilState(selectedCategoryAtom);
  const mainRef = useRef(null);

  useMount(() => {
    const el = mainRef.current;

    let whateverEaseFunctionYouWant = (remaningScrollDistance) => {
      return remaningScrollDistance / 15 + 1;
    };

    uss.hrefSetup();

    el.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        uss.scrollXBy(event.deltaY, el, null, false);
      },
      { passive: false }
    );

    uss.setXStepLengthCalculator(whateverEaseFunctionYouWant, el);
  });

  const renderCategory = () => {
    // Fashion
    if (selectedCategory === categoryMenu[0].to) {
      return (
        <>
          <CategoryItem image={"/fashion/1/0.jpg"} to="/fashion/sofia" />
          <CategoryItem image={"/fashion/2/0.jpg"} to="/fashion/yuli" />
          <CategoryItem image={"/fashion/3/0.jpg"} to="/fashion/santiago" />
          <CategoryItem image={"/fashion/4/0.jpg"} to="/fashion/clari" />
          <CategoryItem image={"/fashion/5/0.jpg"} to="/fashion/cloe" />
          <CategoryItem image={"/fashion/6/0.jpg"} to="/fashion/camila" />
        </>
      );
    }

    // Portraits
    if (selectedCategory === categoryMenu[1].to) {
      return (
        <>
          <CategoryItem image={"/portraits/1/0.jpg"} to="/portraits/santiago" />
          <CategoryItem image={"/portraits/2/0.jpg"} to="/portraits/natasha" />
          <CategoryItem image={"/portraits/3/0.jpg"} to="/portraits/daniel" />
          <CategoryItem image={"/portraits/4/0.jpg"} to="/portraits/cloe" />
          <CategoryItem image={"/portraits/5/1.jpg"} to="/portraits/andrea" />
          <CategoryItem image={"/portraits/6/0.jpg"} to="/portraits/jennie" />
        </>
      );
    }

    // Products
    if (selectedCategory === categoryMenu[2].to) {
      return (
        <>
          <CategoryItem
            image={"/products/1/0.jpg"}
            to="/products/vacaciones-en-roma"
          />
        </>
      );
    }
  };

  return (
    <Container refEl={mainRef} isFlex verticalCentered>
      <NavCategory
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
      {renderCategory()}
      <div className="hidden lg:flex space-x-2 items-center fixed bottom-[15vh] left-2/4 -translate-x-2/4">
        <p className="text-white font-oswald">Scroll</p>
        <div>
          <AiOutlineSwap className="text-white h-5 w-5" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
