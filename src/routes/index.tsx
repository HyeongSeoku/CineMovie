import Layout from 'components/Layout'
import { useAppSelector } from 'hooks/useAppSelector'
import { Routes, Route } from 'react-router-dom'
import { useMount } from 'react-use'
import { getTheme } from 'states/themeState'

import Account from './Account'
import Bookmark from './Bookmark'
import Main from './Main'
import Play from './Play'
import Search from './Search'
import Detail from './Search/Detail'

const App = () => {
  const { theme } = useAppSelector(getTheme)

  useMount(() => {
    document.documentElement.setAttribute('color-theme', theme)
  })

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='play' element={<Play />} />
        <Route path='search' element={<Search />} />
        <Route path='search/:id' element={<Detail />} />
        <Route path='bookmark' element={<Bookmark />} />
        <Route path='account' element={<Account />} />
      </Route>
    </Routes>
  )
}

export default App
