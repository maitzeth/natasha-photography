import styles from '@/styles/components/HorizontalGallery.module.scss';
import { motion, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export const ShowInView = ({ children }: PropsWithChildren) => {
  return (
    <motion.article
      variants={{
        initial: {
          scale: 0,
        },
        animate: {
          scale: 1,
          transition: {
            velocity: 4,
            delay: 0.25
          }
        },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className={styles.inView}
    >
      {children}
    </motion.article>
  );
};


export const HorizontalGallery = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"]);

  return (
    <section ref={targetRef} className={styles.carousel}>
      <div className={styles.inner}>
        <motion.div style={{ x }} className={styles.cards}>
          {cards.map((card, index) => {
            return (
              <div
                key={`gallery-${index}`}
                className={styles.card__wrapper}
              >
                <ShowInView key={`gallery-item-${index}`}>
                  <div className={styles.card}>
                    <div className={styles.card__inner}>
                      <img src={card} alt={`visual element ${index}`} loading="lazy" />
                    </div>
                  </div>
                </ShowInView>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const cards = [
  "/b/1.jpg",
  "/b/2.jpg",
  "/b/3.jpg",
  "/b/4.jpg",
  "/b/5.jpg",
  // "/b/6.jpg",
  // "/b/7.jpg",
  // "/b/8.jpg",
  // "/b/9.jpg",
  // "/b/10.jpg",
  // "/b/11.jpg",
  // "/b/12.jpg"
];