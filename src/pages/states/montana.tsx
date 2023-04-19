import React from 'react'
import Layout from '~/components/Layout'
import Structure from '~/components/Structure'
import Montana from '~/components/Montana'

function montana() {
  return (
    <Layout>
      <Structure bgImg={"bg-[url('/vista.jpg')]"} wideRow={false} >
        <Montana />
      </Structure>
    </Layout>
  )
}

export default montana
