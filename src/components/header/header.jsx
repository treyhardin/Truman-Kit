import { createSignal } from 'solid-js'
import styles from './header.module.css'
import Icon from '../../utils/icons'

export const [ darkMode, setDarkMode ] = createSignal(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

export default function Header() {

  const setColorScheme = () => {
    document.body.setAttribute("dark-mode", darkMode())
  }

  const handleSwitch = () => {
    setDarkMode(!darkMode())
    setColorScheme()
  }

  setColorScheme()

  return (
    <header>
      <div class={styles.navigation}>
        <a href="#" class={styles.logo}>Welp.</a>
      </div>
      <div class={styles.links}>
        <a 
          href="https://trumancreative.co/" 
          class={styles.socialLink}
          target='_blank'
          aria-label='Link to the Truman Creative website'
        >
          <Icon icon="globe" />
        </a>
        <a 
          href="https://github.com/treyhardin/Truman-Kit"
          class={styles.socialLink}
          target='_blank'
          aria-label='Link to Github'
        >
          <Icon icon="github" />
        </a>

        <label class={styles.switch} for="colorScheme">
          <input
            type="checkbox"
            id="colorScheme"
            name="colorScheme"
            onChange={handleSwitch}
            checked={darkMode()}
          />
          <label for="colorScheme" hidden="true">Dark Mode Toggle</label>
          <div class={styles.switchThumb}>
            <div class={styles.switchIcons}>
              <div class={styles.iconDark}><Icon icon="moon" /></div>
              <div class={styles.iconLight}><Icon icon="sun" /></div>
            </div>
          </div>
        </label>

      </div>
    </header>
  )
}