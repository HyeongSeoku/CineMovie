import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { ChangeEventHandler } from 'react'
import { getTheme, toggleTheme } from 'states/themeState'

import styles from './themeToggle.module.scss'

const ThemeToggle = () => {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector(getTheme)

  const handleTheme: ChangeEventHandler<HTMLElement> = () => {
    dispatch(toggleTheme())
  }

  return (
    <label className={styles.switchContainer}>
      <input
        onChange={handleTheme}
        className={styles.toggleInput}
        type='checkbox'
        id='theme_toggle'
        checked={theme === 'dark'}
      />
      <span className={styles.toggleSlider} />
    </label>
  )
}

export default ThemeToggle
