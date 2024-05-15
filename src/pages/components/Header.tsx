import styles from '@/styles/components/Header.module.scss';
import { ScrollYProps } from '@/types/common';
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeaderImage } from './HeaderImage';

export const Header = ({ containerScrollYProgress }: ScrollYProps) => {
  const scale = useTransform(containerScrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(containerScrollYProgress, [0, 0.4], [1, 0]);
  const header = useRef(null);

  const { scrollY } = useScroll({
    target: header,
    offset: [`start end`, `end end`]
  });

  const clipProgress = useTransform(scrollY, [0, 700], [0, 100]);
  
  const topClip = useMotionTemplate`inset(0 0 0 ${clipProgress}%)`;
  const topY = useTransform(scrollY, [0, 800], ['0%', '-25%']);
  const bottomY = useTransform(scrollY, [0, 800], ['0%', '25%']);

  const bottomClip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <motion.header ref={header} style={{ scale, opacity }} className={styles.main}>
      <HeaderImage />
      <div className={styles.caption}>
        <motion.h2 style={{ clipPath: topClip, y: topY }}>Natasha</motion.h2>
        <motion.h2 style={{ clipPath: bottomClip, y: bottomY }}>Villamizar</motion.h2>
      </div>
    </motion.header>
  );
}
