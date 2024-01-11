import styles from './about.module.css'
import solidLogo from '../../assets/logos/solid.svg'
import viteLogo from '../../assets/logos/vite.svg'
import lenisLogo from '../../assets/logos/lenis.svg'
import cssModulesLogo from '../../assets/logos/css-modules.svg'
import { For } from 'solid-js'
import { initObserver } from '../../utils/intersection-observer'

export default function About() {

  const cardStagger = 100

  const platforms = [
    {
      name: "Solid.js",
      logo: solidLogo,
      description: "Simple & Lightweight Reactivity",
      link: "https://www.solidjs.com/"
    },
    {
      name: "Vite",
      logo: viteLogo,
      description: "Quick & Easy Builds",
      link: "https://vitejs.dev/"
    },
    {
      name: "CSS Modules",
      logo: cssModulesLogo,
      description: "Scalable Component Styling",
      link: "https://github.com/css-modules/css-modules"
    },
    {
      name: "Lenis",
      logo: lenisLogo,
      description: "Fancy Smooth Scrolling",
      link: "https://lenis.studiofreight.com/"
    },
    {
      name: "Intersection Observer API",
      // logo: lenisLogo,
      description: "Viewport Transitions",
      link: "https://lenis.studiofreight.com/"
    },
    {
      name: "Scroll-Driven Animations",
      // logo: lenisLogo,
      description: "Viewport Transitions",
      link: "https://lenis.studiofreight.com/"
    },
  ]

  return (
    <section class={styles.aboutSection}>
      <div class={styles.aboutInner}>

        <div class={styles.titleWrapper} data-animate="true" ref={el => initObserver(el)}>
          <h2 class="h2">We all have our own favorite way of building front-end apps.</h2>
          <p>This just happens to be mine. Take it or leave it, but this is the tech stack I've found to be the current best balance of simplicity, flexibility, and performance.</p>
        </div>

        <div class={styles.cardsWrapper}>

          <For each={platforms}>{(platform, i) => 
            <a class={styles.card} href={platform.link} data-animate="true" data-animation-delay={i() * cardStagger} target='_blank' ref={el => initObserver(el)}>
              <div class={styles.cardText}>
                <p class="">{platform.name}</p>
                <p class={styles.platformDescription}>{platform.description}</p>
              </div>
              <Show when={platform.logo}>
                <img class={styles.cardLogo} src={platform.logo} alt={`Logo for ${platform.name}`} />
              </Show>
            </a>
          }</For>

        </div>

      </div>
    </section>
  )
}