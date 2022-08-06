interface IMovie {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface ICard {
  /** 영화 포스터 주소 */
  posterPath: string
  /** 아이디 */
  id: number
  /** 개봉일 */
  releaseDate: string
  /** 기본 언어 */
  originalLanguage: string
  /** 제목 */
  title: string
  /** 원제 */
  originalTitle: string
}

type ApiReqType = 'movie' | 'tv'
