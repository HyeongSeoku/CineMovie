import { AccountIcon, EmptyFavIcon, HomeIcon, PlayIcon, SearchIcon } from 'assets/svgs'
import Account from 'routes/Account'
import Bookmark from 'routes/Bookmark'
import Main from 'routes/Main'
import Play from 'routes/Play'
import Search from 'routes/Search'

export const ROUTE = [
  { icon: <HomeIcon />, title: 'Home', path: '/', component: <Main /> },
  { icon: <PlayIcon />, title: 'Play', path: '/play', component: <Play /> },
  { icon: <SearchIcon />, title: 'Discovery', path: '/search', component: <Search /> },
  { icon: <EmptyFavIcon />, title: 'Favorite', path: '/bookmark', component: <Bookmark /> },
  { icon: <AccountIcon />, title: 'Account', path: '/account', component: <Account /> },
]

export const TAB = [
  { title: 'Movies', id: 'movie' },
  { title: 'TV Shows', id: 'tv' },
  { title: 'Anime', id: 'anime' },
  { title: 'My List', id: 'myList' },
]
