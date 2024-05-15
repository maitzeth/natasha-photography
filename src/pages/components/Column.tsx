import React from 'react'
import styles from '@/styles/components/Parallax.module.scss';
import { motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

type Props = {
  images: string[];
  y: MotionValue<number>;
}

export const Column = ({ images, y }: Props) => {
  return (
    <motion.div 
      className={styles.column}
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
