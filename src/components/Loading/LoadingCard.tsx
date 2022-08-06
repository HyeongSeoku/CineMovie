import styles from './loading.module.scss'

import cx from 'classnames'

interface IProps {
  size: 'S' | 'M' | 'L'
}

const LoadingCard = ({ size }: IProps) => {
  return (
    <li
      className={cx(
        styles.loadingCardContainer,
        { [styles.small]: size === 'S' },
        { [styles.medium]: size === 'M' },
        { [styles.large]: size === 'L' }
      )}
    />
  )
}

export default LoadingCard
