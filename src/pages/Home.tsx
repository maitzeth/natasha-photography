import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import styles from '@/styles/components/Home.module.scss';
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { Header } from './components/Header';
import { HorizontalGallery } from './components/HorizontalGallery';
import { ParallaxGallery } from './components/ParallaxGallery';



const Home = () => {
  useSmoothScroll();

  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={container} className={styles.main}>
      <Header containerScrollYProgress={scrollYProgress}/>
      <ParallaxGallery containerScrollYProgress={scrollYProgress}/>
      <HorizontalGallery />
      <div className={styles.spacer}></div>
    </main>
  );
};



export default Home;
