import Loader from 'components/Loading'
import { Suspense } from 'react'
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
