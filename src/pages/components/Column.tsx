import styles from '@/styles/components/Parallax.module.scss';
import { motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { cn } from '@/lib/common';

type Props = {
  images: string[];
  y: MotionValue<number>;
  className?: string;
}

export const Column = ({ images, y, className }: Props) => {
  return (
    <motion.div 
      className={cn([styles.column, className])}
      style={{ y }}
    >
      {
        images.map((src: string, i: number) => {
          return (
            <div key={i} className={styles.imageContainer}>
              <img src={src} alt="" />        
            </div>
          )
        })
      }
    </motion.div>
  )
}
