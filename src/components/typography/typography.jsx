import ViewportAnimation from '../../utils/animation/viewport-animation'
import styles from './typography.module.css'

export default function Typography() {
  return (
    <section class={styles.typographySection}>
      <div class={styles.typographyInner}>

        <ViewportAnimation>
        <div class={styles.titleWrapper}>
          <h2 class="h3">Fluid Typography</h2>
          <p>Good type isn't about breakpoints, it's about creating a good experience for users regardless of device. The approach we've taken to typography is all about fluid scaling — you plug in a desktop and mobile font size, and CSS figures out the rest.</p>
        </div>
        </ViewportAnimation>

        <div class={styles.stylesWrapper}>
          <ViewportAnimation>
            <p class={`${styles.typeStyle} h1`}>Heading 1</p>
          </ViewportAnimation>
          <ViewportAnimation>
            <p class={`${styles.typeStyle} h2`}>Heading 2</p>
          </ViewportAnimation>
          <ViewportAnimation>
            <p class={`${styles.typeStyle} h3`}>Heading 3</p>
          </ViewportAnimation>
          <ViewportAnimation>
            <p class={`${styles.typeStyle} h4`}>Heading 4</p>
          </ViewportAnimation>
          <ViewportAnimation>
            <p class={`${styles.typeStyle} h5`}>Heading 5</p>
          </ViewportAnimation>
          <ViewportAnimation>
            <p class={`${styles.typeStyle} h6`}>Heading 6</p>
          </ViewportAnimation>
          <ViewportAnimation>
            <p>Paragraph</p>
          </ViewportAnimation>
          <ViewportAnimation>
            <p class="caption">Caption</p>
          </ViewportAnimation>
        </div>

      </div>
    </section>
  )
}