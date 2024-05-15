import styles from '@/styles/components/HeaderImage.module.scss';

export const HeaderImage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.overlay} />
      <img src="/header.jpg" alt="header image" className={styles.image} />
    </div>
  )
}
