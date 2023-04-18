import React from 'react'
import Link from 'next/link'

function Donate() {
  return (
    <div className='flex flex-col justify-center items-center gap-y-5'>
      <p className="text-xl">
        Help us raise funds for appreciation gifts such as agricultural
        supplies and equipment and local farm and ranch store gift
        certificates for landowners that provide public access through Block
        Management.
      </p>
      <h2 className="text-xl">Select a one time donation</h2>
      <div className="flex flex-row gap-x-2">
        <Link
          href={"https://buy.stripe.com/fZedRb3JqfcuaYMfYY"}
          className="btn-outline btn-primary btn text-sm md:text-2xl"
        >
          $25
        </Link>
        <Link
          href={"https://buy.stripe.com/aEU28tgwc1lE8QE001"}
          className="btn-outline btn-primary btn text-sm md:text-2xl"
        >
          $50
        </Link>
        <Link
          href={"https://buy.stripe.com/3cs7sNfs86FYeaY6oq"}
          className="btn-outline btn-primary btn text-sm md:text-2xl"
        >
          $100
        </Link>
        <Link
          href={"https://buy.stripe.com/eVaaEZ3JqggyeaY4gj"}
          className="btn-outline btn-primary btn text-sm md:text-2xl"
        >
          Other
        </Link>
      </div>
      <h2 className="text-xl">Consider a yearly reccuring donation</h2>
      <div className="flex flex-row gap-x-2">
        <Link
          href={"https://buy.stripe.com/fZeeVf5Ry6FY9UI5ko"}
          className="btn-outline btn-primary btn text-sm md:text-2xl"
        >
          $25
        </Link>
        <Link
          href={"https://buy.stripe.com/14kaEZ93K3tMff23ch"}
          className="btn-outline btn-primary btn text-sm md:text-2xl"
        >
          $50
        </Link>
        <Link
          href={"https://buy.stripe.com/3csbJ37ZG9Sa3wkbIO"}
          className="btn-outline btn-primary btn text-sm md:text-2xl"
        >
          $100
        </Link>
      </div>
    </div>
  )
}

export default Donate
