import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

import styles from './movieCard.module.scss'

const MovieCard = ({ data, size }: { data: ICard; size: 'S' | 'M' }) => {
  const { id, posterPath, releaseDate, originalLanguage, originalTitle, title } = data

  return (
    <li className={styles.cardContainer}>
      <Link className={styles.link} to={`search/${id}`}>
        <img className={styles.poster} src={`${process.env.REACT_APP_IMG_URL}${posterPath}`} alt={title} />
      </Link>
    </li>
  )
}

export default MovieCard
