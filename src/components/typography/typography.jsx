import { initViewportAnimation } from '../../utils/viewport-animation'
import styles from './typography.module.css'

export default function Typography() {
  return (
    <section class={styles.typographySection}>
      <div class={styles.typographyInner}>

        <div class={styles.titleWrapper} ref={el => initViewportAnimation(el)}>
          <h2 class="h3">Fluid Typography</h2>
          <p>Good type isn't about breakpoints, it's about creating a good experience for users regardless of device. The approach we've taken to typography is all about fluid scaling — you plug in a desktop and mobile font size, and CSS figures out the rest.</p>
        </div>

        <div class={styles.stylesWrapper}>
          <p class={`${styles.typeStyle} h1`} ref={el => initViewportAnimation(el)}>Heading 1</p>
          <p class={`${styles.typeStyle} h2`} ref={el => initViewportAnimation(el)}>Heading 2</p>
          <p class={`${styles.typeStyle} h3`} ref={el => initViewportAnimation(el)}>Heading 3</p>
          <p class={`${styles.typeStyle} h4`} ref={el => initViewportAnimation(el)}>Heading 4</p>
          <p class={`${styles.typeStyle} h5`} ref={el => initViewportAnimation(el)}>Heading 5</p>
          <p class={`${styles.typeStyle} h6`} ref={el => initViewportAnimation(el)}>Heading 6</p>
          <p>Paragraph</p>
          <p class="caption">Caption</p>
        </div>

      </div>
    </section>
  )
}