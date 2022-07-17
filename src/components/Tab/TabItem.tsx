import { MouseEventHandler } from 'react'

import cx from 'classnames'

import styles from './tab.module.scss'

interface IProps {
  id: string
  title: string
  currentTab: string
}

const TabItem = ({ data, onClick }: { data: IProps; onClick: MouseEventHandler<HTMLElement> }) => {
  const { title, id, currentTab } = data

  return (
    <li className={styles.itemContainer}>
      <div
        className={cx(styles.itemContents, { [styles.selectedItem]: currentTab === id })}
        role='button'
        tabIndex={0}
        onClick={onClick}
        data-id={id}
      >
        {title}
      </div>
    </li>
  )
}

export default TabItem
