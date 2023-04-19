import React from 'react'
import Layout from '~/components/Layout'
import Structure from '~/components/Structure'
import Kansas from '~/components/Kansas'

function kansas() {
  return (
    <Layout>
      <Structure bgImg={"bg-[url('/kansasSunset.jpg')]"} wideRow={false} >
        <Kansas />
      </Structure>
    </Layout>
  )
}

export default kansas
