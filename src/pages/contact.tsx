import React from 'react'
import Layout from '~/components/Layout'
import Structure from '~/components/Structure'
import Contact from '~/components/Contact'

function contact() {
  return (
    <Layout>
      <Structure bgImg='/hike.jpg' wideRow={true}>
        <Contact />
      </Structure>
    </Layout>
  )
}

export default contact
