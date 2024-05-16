import styles from '@/styles/components/CTAScroll.module.scss';
import type { MotionValue } from 'framer-motion';
import { motion, useTransform } from 'framer-motion';

type Props = {
  scrollYProgress: MotionValue<number>;
}

export const CTAScroll = ({ scrollYProgress }: Props) => {
  const opacity = useTransform(scrollYProgress, [0, 100], [1, 0]);
  
  return (
    <motion.div style={{ opacity }} className={styles.main}>
      <div className={styles.scroller}></div>
      <div className={styles.inner}>
        <div>
          <p>scroll</p>
        </div>
        <div>
          <p> to explore</p>
        </div>
      </div>
    </motion.div>
  );
};
