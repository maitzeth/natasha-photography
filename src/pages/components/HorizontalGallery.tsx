import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from '@/styles/components/HorizontalGallery.module.scss';

export const HorizontalGallery = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className={styles.carousel}>
      <div className={styles.inner}>
        <motion.div style={{ x }} className={styles.cards}>
          {cards.map((card, index) => {
            return (
              <div key={`gallery-item-${index}`} className={styles.card}>
                <div className={styles.card__inner}>
                  <img src={card} alt="" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const cards = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "header.webp",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg"
];