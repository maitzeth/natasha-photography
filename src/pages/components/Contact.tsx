import styles from '@/styles/components/Contact.module.scss';
import { Button } from '@/components';
import { Particles } from '@/components/Particles';

export const Contact = () => {
  return (
    <section className={styles.main}>
      <Particles height={`800px`} />
      <div className={styles.caption}>
        <h3>Vamos a crear</h3>
        <h3>Trabajemos juntos</h3>
      </div>
      <Button href="https://www.instagram.com/nashdfg" target="_blank" rel="noopener noreferrer">
        Contactar
      </Button>
    </section>
  )
}
