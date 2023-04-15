import React from 'react'
import Layout from '~/components/Layout'
import Structure from '~/components/Structure'
import Link from 'next/link'

function NotFound() {
  return (
    <Layout>
      <Structure bgImg="bg-[url('/deer.jpg')]" wideRow={false}>
        <>
          <h1 className="font-robotoSlab text-4xl">
            Oops, the page you were looking for can&apos;t be found.
          </h1>
          <Link href={"/"} className="btn-primary btn">
            Return Home
          </Link>
        </>
      </Structure>
    </Layout>
  )
}

export default NotFound
