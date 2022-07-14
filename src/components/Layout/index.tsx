import { Outlet } from 'react-router-dom'

import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Aside />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
