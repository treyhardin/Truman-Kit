import { initViewportAnimation } from '../../utils/viewport-animation'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.sectionTitle} data-animate="true" ref={el => initViewportAnimation(el)}>
        <h1>Whelp, That's All I Got For You Folks.</h1>
        <p>I'm gonna keep on updating this project as I continue to use it, so check back every now and then and see if there's anything worth trying out.</p>
      </div>
      <div class={styles.footerNavigation}>
        <div class={styles.footerLinks}>
          <a href="https://github.com/treyhardin/Truman-Kit" class={styles.footerLink} target='_blank'>Github</a>
          <a href="https://trumancreative.co/" class={styles.footerLink} target='_blank'>Truman Creative</a>
        </div>
        <div class={styles.footerInfo}>
          <p>&#169; 2024 Truman Creative Co.</p>
        </div>
      </div>
    </footer>
  )
}