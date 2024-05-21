import styles from '@/styles/components/Parallax.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useWindowSize } from 'react-use';
import { Column } from './Column';
import { useRef } from 'react';

type Props = {
  containerScrollYProgress: MotionValue<number>;
}

const images = [
  "/a/1.jpg",
  "/a/2.jpg",
  "/a/3.jpg",
  "/a/4.jpg",
  "/a/5.jpg",
  "/a/6.jpg",
  "/a/7.jpg",
  "/a/8.jpg",
  "/a/9.jpg",
  "/a/10.jpg",
  "/a/11.jpg",
  "/a/12.jpg",
];

export const ParallaxGallery = ({ containerScrollYProgress }: Props) => {
  const scale = useTransform(containerScrollYProgress, [0, 0.5], [0.9, 1]);

  const container = useRef(null);
  const { height } = useWindowSize();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'] 
    // Top of the container, and at the end of the windows
    // End of the container and top of the windows
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);

  return (
    <motion.section style={{scale}} ref={container} className={styles.gallery}>
      <Column images={[images[0], images[1], images[2]]} y={y1} />
      <Column images={[images[3], images[4], images[5]]} y={y2} />
      <Column images={[images[8], images[7], images[6]]} y={y3} />
      <Column images={[images[9], images[10], images[11]]} y={y4} />
    </motion.section>
  )
}
