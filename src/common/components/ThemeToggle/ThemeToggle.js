import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.scss'

/**
 * Adds a button to switch between dark and light themes
 * @returns component
 */
export default function ThemeToggle () {
  const [activeTheme, setActiveTheme] = useState('light')
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = activeTheme
  }, [activeTheme])

  return (
    <button type='button' className={styles.button} onClick={() => setActiveTheme(inactiveTheme)}>
      {
      activeTheme === 'light'
        ? <span className={styles.moon}><Image src='/dark.svg' alt='light icon' width={50} height={50} /></span>
        : <span className={styles.sun}><Image src='/light.svg' alt='light icon' width={50} height={50} /></span>
      }
    </button>
  )
}
