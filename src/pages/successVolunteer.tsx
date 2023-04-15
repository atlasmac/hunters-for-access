import Link from 'next/link'
import React from 'react'
import Layout from '~/components/Layout'
import Structure from '~/components/Structure'

function successVolunteer() {
  return (
    <Layout>
      <Structure bgImg="bg-[url('/deer.jpg')]" wideRow={false}>
        <>
          <h1 className="font-robotoSlab text-4xl">
            Thank you for your interest in volunteering!
          </h1>
          <Link href={"/"} className="btn-primary btn">
            Return Home
          </Link>
        </>
      </Structure>
    </Layout>
  )
}

export default successVolunteer
