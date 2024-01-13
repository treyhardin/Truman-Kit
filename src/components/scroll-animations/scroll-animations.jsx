import { initScrollAnimation } from '../../utils/scroll-animation'
import styles from './scroll-animations.module.css'

export default function ScrollAnimations() {
  
  return (
    <section class={styles.scrollAnimations} ref={el => initScrollAnimation(el)}>

      <div class={styles.scrollContainer}>
        <div class={styles.sectionTitle}>
          <h3>Scroll Animations</h3>
        </div>
        <div class={styles.cardWrapper}>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
          <div class={styles.card}></div>
        </div>
      </div>
    </section>
  )
}