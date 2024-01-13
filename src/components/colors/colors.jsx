import { initViewportAnimation } from '../../utils/viewport-animation'
import styles from './colors.module.css'

export default function Colors() {

  const swatchStagger = 50

  return (
    <section class={styles.colorsSection}>
      <div class={styles.colorsInner}>

        <div class={styles.sectionTitle} ref={el => initViewportAnimation(el)}>
          <h2>Color System</h2>
          <p>A flexible color system supporting color schemes & optimized for sufficient contrast.</p>
        </div>

        <div class={styles.colorSwatches}>

          <div class={styles.swatchesBrand}>

            <span class={`${styles.colorSwatch} ${styles.swatchBrand}`} data-animation-delay={1 * swatchStagger} ref={el => initViewportAnimation(el)}>
              <p>Brand</p>
              <p class={styles.swatchCaption}>Primary</p>
            </span>

            <span class={`${styles.colorSwatch} ${styles.swatchBrandSecondary}`} data-animation-delay={2 * swatchStagger} ref={el => initViewportAnimation(el)}>
              <p>Brand</p>
              <p class={styles.swatchCaption}>Secondary</p>
            </span>

          </div>
            
          <div class={styles.swatchesUtility}>

            <span class={`${styles.colorSwatch} ${styles.swatchForeground}`} data-animation-delay={3 * swatchStagger} ref={el => initViewportAnimation(el)}>
              <p class={styles.swatchTitle}>Foreground</p>
              <p class={styles.swatchCaption}>Primary</p>
            </span>

            <span class={`${styles.colorSwatch} ${styles.swatchForegroundSecondary}`} data-animation-delay={4 * swatchStagger} ref={el => initViewportAnimation(el)}>
              <p class={styles.swatchTitle}>Foreground</p>
              <p class={styles.swatchCaption}>Secondary</p>
            </span>

            <span class={`${styles.colorSwatch} ${styles.swatchNeutral}`} data-animation-delay={5 * swatchStagger} ref={el => initViewportAnimation(el)}>
              <p class={styles.swatchTitle}>Neutral</p>
              <p class={styles.swatchCaption}>Neutral</p>
            </span>

            <span class={`${styles.colorSwatch} ${styles.swatchBackgroundSecondary}`} data-animation-delay={6 * swatchStagger} ref={el => initViewportAnimation(el)}>
              <p class={styles.swatchTitle}>Background</p>
              <p class={styles.swatchCaption}>Secondary</p>
            </span>

            <span class={`${styles.colorSwatch} ${styles.swatchBackground}`} data-animation-delay={7 * swatchStagger} ref={el => initViewportAnimation(el)}>
              <p class={styles.swatchTitle}>Background</p>
              <p class={styles.swatchCaption}>Primary</p>
            </span>
          </div>  
            
        </div>

      </div>
    </section>
  )
}