import { TAB } from 'constants/uiData'
import React, { MouseEventHandler, useState } from 'react'
import TabItem from './TabItem'

import styles from './tab.module.scss'
import { TabContents } from './Contents'

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(TAB[0].id)

  const handleTabClick: MouseEventHandler<HTMLElement> = (e) => {
    const { id } = e.currentTarget.dataset
    setCurrentTab(id!)
  }

  return (
    <div className={styles.container}>
      <ul className={styles.tabListContainer}>
        {TAB.map(({ title, id }) => (
          <TabItem key={id} data={{ title, id, currentTab }} onClick={handleTabClick} />
        ))}
      </ul>
      <TabContents id={currentTab} />
    </div>
  )
}

export default Tab
