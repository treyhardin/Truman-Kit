import styles from './about.module.css'
import { For } from 'solid-js'
import ViewportAnimation from '../../utils/animation/viewport-animation'
import Icon from '../../utils/icons'

export default function About() {

  const cardStagger = 100

  const platforms = [
    {
      name: "Solid.js",
      description: "Simple & Lightweight Reactivity",
      logo: "solid-js",
      link: "https://www.solidjs.com/"
    },
    {
      name: "Vite",
      description: "Quick & Easy Builds",
      logo: "vite",
      link: "https://vitejs.dev/"
    },
    {
      name: "CSS Modules",
      description: "Scalable Component Styling",
      logo: "css-modules",
      link: "https://github.com/css-modules/css-modules"
    },
    {
      name: "Lenis",
      description: "Fancy Smooth Scrolling",
      logo: "lenis",
      link: "https://lenis.studiofreight.com/"
    },
    {
      name: "Intersection Observer API",
      description: "Viewport Transitions",
      logo: "intersection-observer",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
    },
    // {
    //   name: "Scroll-Driven Animations",
    //   // logo: lenisLogo,
    //   description: "Viewport Transitions",
    //   link: "https://lenis.studiofreight.com/"
    // },
  ]

  return (
    <section class={styles.aboutSection}>
      <div class={styles.aboutInner}>

        <ViewportAnimation>
          <div class={styles.titleWrapper}>
            <h2 class="h2">We all have our own favorite way of building front-end apps.</h2>
            <p>This just happens to be mine. Take it or leave it, but this is the tech stack I've found to be the current best balance of simplicity, flexibility, and performance.</p>
          </div>
        </ViewportAnimation>

        <div class={styles.cardsWrapper}>

          <For each={platforms}>{(platform, i) => 
            <ViewportAnimation delay={i() * cardStagger}>
              <a class={styles.card} href={platform.link} target='_blank'>
                <div class={styles.cardText}>
                  <p class="">{platform.name}</p>
                  <p class={styles.platformDescription}>{platform.description}</p>
                </div>
                <Icon icon={platform.logo} />
                {/* <Show when={platform.logo}>
                  <img class={styles.cardLogo} src={platform.logo} alt={`Logo for ${platform.name}`} />
                </Show> */}
              </a>
            </ViewportAnimation>
          }</For>

        </div>

      </div>
    </section>
  )
}