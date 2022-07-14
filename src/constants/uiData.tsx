import { AccountIcon, EmptyFavIcon, HomeIcon, PlayIcon, SearchIcon } from 'assets/svgs'

export const NAV_LIST_DATA = [
  { icon: <HomeIcon />, title: 'Home', path: '/' },
  { icon: <PlayIcon />, title: 'Play', path: '/play' },
  { icon: <SearchIcon />, title: 'Discovery', path: '/search' },
  { icon: <EmptyFavIcon />, title: 'Favorite', path: '/bookmark' },
  { icon: <AccountIcon />, title: 'Account', path: '/account' },
]
