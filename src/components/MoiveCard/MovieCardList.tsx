import MovieCard from 'components/MoiveCard'

import cx from 'classnames'

import styles from './movieCard.module.scss'

interface IProps {
  data: ICard[]
  direction: 'row' | 'column'
}

const MovieCardList = ({ data, direction }: IProps) => {
  const listData = data.slice(0, 10)

  return (
    <div className={styles.container}>
      <ul className={cx(styles.listContainer, { [styles.rowListContainer]: direction === 'row' })}>
        {listData.map((movie) => (
          <MovieCard key={`${movie.id}_${movie.releaseDate}`} data={movie} size='S' />
        ))}
      </ul>
    </div>
  )
}

export default MovieCardList
