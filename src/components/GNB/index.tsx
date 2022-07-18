import { useLocation } from 'react-use'

import { ROUTE } from 'constants/uiData'
import NavItem from './NavItem'

import styles from './gnb.module.scss'

const GNB = () => {
  const { pathname } = useLocation()

  return (
    <nav className={styles.container}>
      <ul className={styles.navListContainer}>
        {ROUTE.map((contents) => (
          <NavItem key={contents.title} contents={contents} pathname={pathname!} />
        ))}
      </ul>
    </nav>
  )
}

export default GNB
