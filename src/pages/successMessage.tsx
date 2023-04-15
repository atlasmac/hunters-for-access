import React from 'react'
import Layout from '~/components/Layout'
import Structure from '~/components/Structure'
import Link from 'next/link'

function successMessage() {
  return (
    <Layout>
      <Structure bgImg="bg-[url('/sky.jpg')]" wideRow={false}>
        <>
          <h1 className="font-robotoSlab text-4xl">Thank you for your message, we appreciate your interest.</h1>
          <Link href={"/"} className="btn-primary btn">
            Return Home
          </Link>
        </>
      </Structure>
    </Layout>
  )
}

export default successMessage
