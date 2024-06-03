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
  "/b/1.webp",
  "/b/2.webp",
  "/b/3.webp",
  "/b/4.webp",
  "/b/5.webp",
];