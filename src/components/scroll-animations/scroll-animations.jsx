import ScrollAnimation from '../../utils/animation/scroll-animation'
import styles from './scroll-animations.module.css'

export default function ScrollAnimations() {

  const cards = [
    {
      title: "Color Themes",
      emoji: "🎨",
      description: "Supports both light & dark color schemes, with accessibility in mind."
    },
    {
      title: "CSS Variables",
      emoji: "⚙️",
      description: "Robust set of helper variables for quick global styling updates."
    },
    {
      title: "Helper Utilities",
      emoji: "🔧",
      description: "Handy utility functions for common animation patterns, icons, and more."
    },
    {
      title: "Accessible",
      emoji: "♿️",
      description: "All elements built with accessibility in mind and continually improving."
    },
    {
      title: "Lightweight",
      emoji: "🪶",
      description: "Built with zero bloat and no unnecessary dependencies for scalability and maintainability."
    },
    {
      title: "High-Performance",
      emoji: "💪",
      description: "Super fast and following industry best practices, with 100% Lighthouse scores all around."
    },
    {
      title: "SEO-Optimized",
      emoji: "🔍",
      description: "Includes all the proper meta tags, typographic hierarchy, and a strong foundation for SEO optimization."
    },
  ]

  return (
    <ScrollAnimation threshold={0.2}>
      <section class={styles.scrollAnimations}>

        <div class={styles.scrollContainer}>
          <div class={styles.sectionTitle}>
            <h3>Scroll Animations</h3>
            <p>Includes a fancy wrapper for easy scroll animations of any CSS property.</p>
          </div>
          <div class={styles.cardWrapper}>
            <For each={cards}>{(card, i) =>
              <div class={styles.card}>
                <div class={styles.cardText}>
                  <p class={styles.cardEmoji}>{card.emoji}</p>
                  <h4 class={styles.cardTitle}>{card.title}</h4>
                </div>
                <p class={styles.cardDescription}>{card.description}</p>
                {/* <p class={styles.cardEmoji}>{card.emoji}</p> */}
              </div>
            }</For>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}