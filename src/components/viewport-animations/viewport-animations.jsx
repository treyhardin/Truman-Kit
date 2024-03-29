import ViewportAnimation from '../../utils/animation/viewport-animation'
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

        <ViewportAnimation bidirectional={true} delay={0 * cardDelay}>
          <div class={styles.card}>
            <p class={styles.emoji}>⚖️</p>
            <div class={styles.cardText}>
              <h3 class={styles.cardTitle}>100% CSS-Based</h3>
              <p class={styles.cardDescription}>There's nothing wrong with all those fancy animation libraries, but who needs dependencies when you're a CSS god? Slap some CSS transition and some fancy transforms on your element and call it a day.</p>
            </div>
          </div>

          <div class={styles.card}>
            <p class={styles.emoji}>🚦</p>
            <div class={styles.cardText}>
              <h3 class={styles.cardTitle}>Easy Staggering</h3>
              <p class={styles.cardDescription}>Add a data attribute for delay within a loop and voilá, there's your staggered animation. Not the most groundbreaking stuff, but it's one less thing you have to figure out yourself.</p>
            </div>
          </div>
          
          <div class={styles.card}>
            <p class={styles.emoji}>🎚</p>
            <div class={styles.cardText}>
              <h3 class={styles.cardTitle}>Configurable & Scalable</h3>
              <p class={styles.cardDescription}>Ultimately, it's just a bit of syntactic sugar on top of the browser-native Intersection Observer API. Use as many observers as you want, tweak the settings, do whatever and you probably still won't break much.</p>
            </div>
          </div>
        </ViewportAnimation>

      </div>

    </section>
  )
}