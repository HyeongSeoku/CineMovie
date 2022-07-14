import cx from 'classnames'
import { Link } from 'react-router-dom'

import styles from './nav.module.scss'

interface IProps {
  icon: JSX.Element
  title: string
  path: string
}

const NavItem = ({ contents, pathname }: { contents: IProps; pathname: string }) => {
  const { icon, title, path } = contents

  return (
    <li>
      <Link to={path} className={styles.navItemContainer}>
        <div className={cx(styles.navIconContainer, { [styles.selectedNavItem]: path === pathname })}>{icon}</div>
        <div className={cx(styles.title, { [styles.selectedNavItem]: path === pathname })}>{title}</div>
      </Link>
    </li>
  )
}

export default NavItem
