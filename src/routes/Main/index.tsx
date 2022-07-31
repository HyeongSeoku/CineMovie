import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import cx from 'classnames'

import { filterCardListData } from 'utils/filterCardListData'
import MovieCardList from 'components/MoiveCard/MovieCardList'
import Tab from 'components/Tab'
import { getPopularVideoList, getTrendVideoListByDay } from 'services/movie'

import styles from './main.module.scss'

const Main = () => {
  const [trend, setTrend] = useState<ICard[]>([])
  const [popular, setPopular] = useState<ICard[]>([])

  // TODO: useQueries로 변환 가능한지 생각
  const { data: trendData } = useQuery(
    ['#trendMovieList'],
    () => getTrendVideoListByDay('movie').then((data) => filterCardListData(data)),
    { refetchOnWindowFocus: false, suspense: true, cacheTime: Infinity, useErrorBoundary: true }
  )

  const { data: popularData } = useQuery(
    ['#popularMovieList'],
    () => getPopularVideoList('movie').then((data) => filterCardListData(data)),
    { refetchOnWindowFocus: false, suspense: true, cacheTime: Infinity, useErrorBoundary: true }
  )

  useEffect(() => {
    if (!!trendData && !!popularData) {
      setTrend(trendData)
      setPopular(popularData)
    }
  }, [trendData, popularData])

  return (
    <div className={styles.container}>
      <Tab />
      <MovieCardList data={popular} direction='row' />
    </div>
  )
}

export default Main
