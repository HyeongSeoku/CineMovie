import { NAV_LIST_DATA } from 'constants/uiData'
import NavItem from './NavItem'

import styles from './nav.module.scss'
import { useLocation } from 'react-use'

const Nav = () => {
  const { pathname } = useLocation()

  return (
    <nav className={styles.container}>
      <ul className={styles.navListContainer}>
        {NAV_LIST_DATA.map((contents) => (
          <NavItem key={contents.title} contents={contents} pathname={pathname!} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav
