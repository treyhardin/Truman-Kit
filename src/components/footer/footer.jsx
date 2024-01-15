import ViewportAnimation from '../../utils/animation/viewport-animation'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <ViewportAnimation>
        <div class={styles.sectionTitle} data-animate="true">
          <h2>Welp, That's All I Got For You Folks.</h2>
          <p>I'm gonna keep on updating this project as I continue to use it, so check back every now and then and see if there's anything worth trying out.</p>
          <button 
            class="button--secondary"
            title='Get Started' 
            onClick={(e) => window.open('https://github.com/treyhardin/Truman-Kit', '_blank')}
          >
            Get Started
          </button>
        </div>
      </ViewportAnimation>
      <div class={styles.footerNavigation}>
        <div class={styles.footerLinks}>
          <a href="https://www.figma.com/community/file/1328853610130359786/truman-kit" class={styles.footerLink} target='_blank'>Figma File</a>
          <a href="https://github.com/treyhardin/Truman-Kit" class={styles.footerLink} target='_blank'>Github</a>
          {/* <a href="https://trumancreative.co/" class={styles.footerLink} target='_blank'>Truman Creative</a> */}
        </div>
        <div class={styles.footerInfo}>
          <p>&#169; 2024 Truman Creative Co.</p>
        </div>
      </div>
    </footer>
  )
}