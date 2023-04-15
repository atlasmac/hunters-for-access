import Link from 'next/link'
import React from 'react'
import Layout from '~/components/Layout'
import Structure from '~/components/Structure'


function successDonation() {

  return (
    <Layout>
      <Structure bgImg="bg-[url('/sky.jpg')]" wideRow={false}>
        <>
          <h1 className="font-robotoSlab text-4xl">
            Thank you for your generous donation.
          </h1>
          <p className="text-xl">
            We are incredibly grateful for your kindness and generosity. We will
            use your donation to purchase agricultural supplies and equipment for
            local farms and ranches to show appreciation for them allowing public
            hunting access through the Block Management Program. In addition to
            appreciation gifts, we also organize work crews for participating
            farmers and rancheres to perform tasks such as fixing fences, erecting
            stackyards, and removing trash. It is our hope that these efforts will
            encourage landowners to continue providing public hunting access
            through the Block Management program rather than lease their lands to
            private groups or outfitters.
          </p>
          <Link href={"/"} className="btn-primary btn">
            Return Home
          </Link>
        </>
      </Structure>
    </Layout>
  )
}

export default successDonation
