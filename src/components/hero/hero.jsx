import styles from './hero.module.css'

export default function Hero() {
  return (
    <section class={styles.heroSection}>
      {/* <p class="h5">Truman Creative Starter</p> */}
      <div class={styles.sectionTitle}>
        <h1 class={styles.heading}>It's Good Enough For Me!</h1>
        <p class={styles.subheading}>A simple, performant & aesthetic toolkit for nice frontend apps.</p>
      </div>
      <button 
        title='Get Started' 
        onClick={(e) => window.open('https://github.com/treyhardin/Truman-Kit', '_blank')}
      >
        Get Started
      </button>
    </section>
  )
}