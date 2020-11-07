import React, { Fragment, useEffect } from 'react'
import '../public/assets/scss/style.scss'
import Head from 'next/head'
import NewFeatures from './page/newfeatures'


const Home = () => {

  useEffect(() => {
    document.body.style.setProperty('--primary', '#000538')
    document.body.style.setProperty('--secondary', 'blue')
    document.body.style.setProperty('--light', 'red')
    document.body.style.setProperty('--dark', '#000538')
  })

  return (
    <Fragment>
      <Head>
        <title>Константин Невский - разработка сайтов, настройка и внедрение Битрикс24</title>
      </Head>

      <NewFeatures />

    </Fragment>
  )
}

export default Home
