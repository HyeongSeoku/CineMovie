import axios from 'axios'
import _ from 'lodash'

const BASE_URL = 'https://api.themoviedb.org/3'

// FIXME: data-set 타입을 이런식으로 지정할 수 없어서, 비디오 타입을 string으로 맞춰야함
type videoType = 'multi' | 'movie' | 'tv'

export const getVideoListByKeyword = async (videoType: string, keyword: string) =>
  axios.get(`${BASE_URL}/search/${videoType}?query=${keyword}`, {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY!,
    },
  })

export const getVideoDetail = (videoType: videoType, videoId: number) =>
  axios.get(`${BASE_URL}/${videoType}/${videoId}`, {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY!,
    },
  })

export const getTrendVideoListByDay = (videoType: string) =>
  axios
    .get(`${BASE_URL}/trending/${videoType}/day?language=ko-KR&region=KR`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY!,
      },
    })
    .then((res) => res.data.results)

export const getTrendVideoListByWeek = (videoType: string) =>
  axios
    .get(`${BASE_URL}/trending/${videoType}/week?language=ko-KR&region=KR`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY!,
      },
    })
    .then((res) => res.data.results)
// _.orderBy(res.data.results, ['vote_average', 'popularity', 'vote_count'], ['desc', 'desc', 'desc'])

export const getPopularVideoList = (videoType: string) =>
  axios
    .get(`${BASE_URL}/${videoType}/popular?language=ko-KR&region=KR`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY!,
      },
    })
    .then((res) => _.orderBy(res.data.results, ['popularity', 'vote_count'], ['desc', 'desc']))
