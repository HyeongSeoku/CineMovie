import cx from 'classnames'
import LoadingCard from './LoadingCard'

import styles from './loading.module.scss'

const load = [0, 1, 2, 3, 4, 5, 6]

const Loader = () => {
  // TODO: redux로 변경 예정

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.title} />
      <div className={styles.listContainer}>
        <ul className={styles.loadingCardList}>
          {load.map((item) => (
            <LoadingCard key={`loader_${item}`} size='M' />
          ))}
        </ul>
      </div>
      <div className={styles.title} />
      <div className={styles.listContainer}>
        <ul className={styles.loadingCardList}>
          {load.map((item) => (
            <LoadingCard key={`loader_${item}`} size='S' />
          ))}
        </ul>
      </div>
      <div className={styles.bigTitle} />
      <div className={styles.title} />
      <div className={styles.listContainer}>
        <ul className={styles.loadingCardList}>
          {load.map((item) => (
            <LoadingCard key={`loader_${item}`} size='S' />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Loader
