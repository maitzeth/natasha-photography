import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '@/styles/components/Button.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = ({ children, ...attributes}: any) => {
  const circle = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timeline = useRef<any>(null);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  useEffect( () => {
    if (timeline) {
      timeline.current = gsap.timeline({paused: true})
      timeline.current
        .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
        .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
    }

  }, []);
  
  const manageMouseEnter = () => {
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }

  return (
    <a
      className={styles.roundedButton}
      style={{overflow: "hidden"}}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...attributes}
    >
      <p>{children}</p>
      <div ref={circle} className={styles.circle}></div>
    </a>
  )
}
