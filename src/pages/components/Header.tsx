import styles from '@/styles/components/Header.module.scss';
import { ScrollYProps } from '@/types/common';
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CTAScroll } from './CTAScroll';
import { HeaderImage } from './HeaderImage';
import { Particles } from '@/components/Particles';

export const Header = ({ containerScrollYProgress }: ScrollYProps) => {
  const scale = useTransform(containerScrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(containerScrollYProgress, [0, 0.4], [1, 0]);
  const header = useRef(null);

  const { scrollY } = useScroll({
    target: header,
    offset: [`start end`, `end end`]
  });

  const clipProgress = useTransform(scrollY, [0, 700], [0, 100]);
  
  const titleY = useTransform(scrollY, [0, 800], ['0%', '-25%']);
  const subTitleY = useTransform(scrollY, [0, 800], ['0%', '25%']);
  const descriptionY = useTransform(scrollY, [0, 1000], ['0%', '55%']);
  
  const topClip = useMotionTemplate`inset(0 0 0 ${clipProgress}%)`;
  const bottomClip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
  const descriptionClip = useMotionTemplate`inset(0 0 ${clipProgress}% 0)`;

  return (
    <motion.header ref={header} style={{ scale, opacity }} className={styles.main}>
      <Particles height="100vh" />
      <HeaderImage />
      <div className={styles.caption}>
        <motion.h2 style={{ clipPath: topClip, y: titleY }}>Natasha</motion.h2>
        <motion.h2 style={{ clipPath: bottomClip, y: subTitleY }}>Villamizar</motion.h2>
        <motion.h3 style={{ clipPath: descriptionClip, y: descriptionY }}>Photographer Based in Buenos Aires</motion.h3>
      </div>
      <CTAScroll scrollYProgress={scrollY} />
    </motion.header>
  );
}
