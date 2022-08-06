import ThemeToggle from 'components/ThemeToggle'
import styles from './layout.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>LOGO</div>
      <ThemeToggle />
    </header>
  )
}

export default Header
