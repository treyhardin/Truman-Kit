import { initViewportAnimation } from '../../utils/viewport-animation'
import styles from './viewport-animations.module.css'

export default function ViewportAnimations() {

  const cardDelay = 300

  return (
    <section class={styles.viewportAnimations}>
      <div class={styles.sectionTitle}>
        <h2>Viewport Transitions</h2>
        <p>Using the Intersection Observer API and some simple CSS, you can easily create some nice in-view animations that don't require external dependencies.</p>
      </div>
      <div class={styles.content}>

        <div class={styles.card} data-animation-delay={0 * cardDelay} ref={el => initViewportAnimation(el)}>
          <p class={styles.emoji}>⚖️</p>
          <div class={styles.cardText}>
            <h6 class={styles.cardTitle}>100% CSS-Based</h6>
            <p class={styles.cardDescription}>There's nothing wrong with all those fancy animation libraries, but who needs dependencies when you're a CSS god? Slap some CSS transition and some fancy transforms on your element and call it a day.</p>
          </div>
        </div>

        <div class={styles.card} data-animation-delay={1 * cardDelay} ref={el => initViewportAnimation(el)}>
          <p class={styles.emoji}>🚦</p>
          <div class={styles.cardText}>
            <h6 class={styles.cardTitle}>Easy Staggering</h6>
            <p class={styles.cardDescription}>Add a data attribute for delay within a loop and voilá, there's your staggered animation. Not the most groundbreaking stuff, but it's one less thing you have to figure out yourself.</p>
          </div>
        </div>

        <div class={styles.card} data-animation-delay={2 * cardDelay} ref={el => initViewportAnimation(el)}>
          <p class={styles.emoji}>🎚</p>
          <div class={styles.cardText}>
            <h6 class={styles.cardTitle}>Configurable & Scalable</h6>
            <p class={styles.cardDescription}>Ultimately, it's just a bit of syntactic sugar on top of the browser-native Intersection Observer API. Use as many observers as you want, tweak the settings, do whatever and you probably still won't break much.</p>
          </div>
        </div>

      </div>

    </section>
  )
}