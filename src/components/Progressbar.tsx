import styles from '@/styles/components/Progressbar.module.scss';
import { motion, useScroll } from 'framer-motion';

export const Progressbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.main}
      style={{ scaleX: scrollYProgress }}
    />
  )
}
