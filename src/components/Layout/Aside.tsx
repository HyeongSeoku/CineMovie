import Nav from 'components/Nav'

import styles from './layout.module.scss'

const Aside = () => {
  return (
    <aside className={styles.asideContainer}>
      <Nav />
    </aside>
  )
}

export default Aside
