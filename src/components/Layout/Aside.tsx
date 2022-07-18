import GNB from 'components/GNB'

import styles from './layout.module.scss'

const Aside = () => {
  return (
    <aside className={styles.asideContainer}>
      <div className={styles.asideText}>MENU</div>
      <GNB />
    </aside>
  )
}

export default Aside
