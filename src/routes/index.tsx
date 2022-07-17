import Layout from 'components/Layout'
import { Routes, Route } from 'react-router-dom'

import Account from './Account'
import Bookmark from './Bookmark'
import Main from './Main'
import Play from './Play'
import Search from './Search'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='play' element={<Play />} />
        <Route path='search' element={<Search />} />
        <Route path='bookmark' element={<Bookmark />} />
        <Route path='account' element={<Account />} />
      </Route>
    </Routes>
  )
}

export default App
