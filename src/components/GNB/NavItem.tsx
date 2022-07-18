import { Link } from 'react-router-dom'
import cx from 'classnames'

import styles from './gnb.module.scss'

interface IProps {
  icon: JSX.Element
  title: string
  path: string
}

const NavItem = ({ contents, pathname }: { contents: IProps; pathname: string }) => {
  const { icon, title, path } = contents
  const isSelected = path === '/' ? path === pathname : pathname.includes(path)

  return (
    <li>
      <Link to={path} className={styles.navItemContainer}>
        <div
          className={cx(styles.navIconContainer, {
            [styles.selectedNavItem]: isSelected,
          })}
        >
          {icon}
        </div>
        <div
          className={cx(styles.title, {
            [styles.selectedNavItem]: isSelected,
          })}
        >
          {title}
        </div>
      </Link>
    </li>
  )
}

export default NavItem
