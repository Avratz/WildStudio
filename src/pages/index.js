import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Landing from '../components/landing/landing.component'
import QuienesSomos from '../components/quienes-somos/quienes-somos.component'
import QueHacemos from '../components/hacemos/hacemos.component'
import NuestrosTrabajos from '../components/nuestros-trabajos/nuestros-trabajos.component'
import Contacto from '../components/contacto/contacto.component'

import './index.scss'

const IndexPage = () => (
  <Layout>
    <>
      <SEO title="Home" />
      <Landing />
      <QuienesSomos />
      <QueHacemos />
      <NuestrosTrabajos />
      <Contacto />
    </>
  </Layout>
)

export default IndexPage
