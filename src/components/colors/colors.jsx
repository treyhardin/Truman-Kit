import ViewportAnimation from '../../utils/animation/viewport-animation'
import styles from './colors.module.css'

export default function Colors() {

  const swatchStagger = 50

  return (
    <section class={styles.colorsSection}>
      <div class={styles.colorsInner}>

        <ViewportAnimation>
          <div class={styles.sectionTitle}>
            <h2>Color System</h2>
            <p>A flexible color system supporting color schemes & optimized for sufficient contrast.</p>
          </div>
        </ViewportAnimation>

        <div class={styles.colorSwatches}>

          <div class={styles.swatchesBrand}>

            <ViewportAnimation delay={1 * swatchStagger}>
              <span class={`${styles.colorSwatch} ${styles.swatchBrand}`}>
                <p>Brand</p>
                <p class={styles.swatchCaption}>Primary</p>
              </span>
            </ViewportAnimation>

            <ViewportAnimation delay={2 * swatchStagger}>
              <span class={`${styles.colorSwatch} ${styles.swatchBrandSecondary}`}>
                <p>Brand</p>
                <p class={styles.swatchCaption}>Secondary</p>
              </span>
            </ViewportAnimation>

          </div>
            
          <div class={styles.swatchesUtility}>

          <ViewportAnimation delay={3 * swatchStagger}>
            <span class={`${styles.colorSwatch} ${styles.swatchForeground}`}>
              <p class={styles.swatchTitle}>Foreground</p>
              <p class={styles.swatchCaption}>Primary</p>
            </span>
            </ViewportAnimation>

            <ViewportAnimation delay={4 * swatchStagger}>
            <span class={`${styles.colorSwatch} ${styles.swatchForegroundSecondary}`}>
              <p class={styles.swatchTitle}>Foreground</p>
              <p class={styles.swatchCaption}>Secondary</p>
            </span>
            </ViewportAnimation>

            <ViewportAnimation delay={5 * swatchStagger}>
            <span class={`${styles.colorSwatch} ${styles.swatchNeutral}`}>
              <p class={styles.swatchTitle}>Neutral</p>
              <p class={styles.swatchCaption}>Neutral</p>
            </span>
            </ViewportAnimation>

            <ViewportAnimation delay={6 * swatchStagger}>
            <span class={`${styles.colorSwatch} ${styles.swatchBackgroundSecondary}`}>
              <p class={styles.swatchTitle}>Background</p>
              <p class={styles.swatchCaption}>Secondary</p>
            </span>
            </ViewportAnimation>

            <ViewportAnimation delay={7 * swatchStagger}>
            <span class={`${styles.colorSwatch} ${styles.swatchBackground}`}>
              <p class={styles.swatchTitle}>Background</p>
              <p class={styles.swatchCaption}>Primary</p>
            </span>
            </ViewportAnimation>
          </div>  
            
        </div>

      </div>
    </section>
  )
}