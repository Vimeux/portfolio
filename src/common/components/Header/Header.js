import Link from 'next/link'
import { useRouter } from 'next/router'
import ToggleTheme from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.scss'

export default function Header () {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a
          className={router.asPath === '/' ? styles.linkActive : styles.link}
        >
          <p>Home</p>
        </a>
      </Link>
      <Link href='/contact'>
        <a
          className={router.asPath === '/contact' ? styles.linkActive : styles.link}
        >
          <p>Contact</p>
        </a>
      </Link>
      <ToggleTheme />
    </nav>
  )
}
