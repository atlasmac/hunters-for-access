import Link from 'next/link'
import React from 'react'

function Support() {
  return (
    <>
      <h1 className=" font-robotoSlab text-2xl sm:text-3xl">
        Support Hunters for Access
      </h1>
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
      <div className="divider">OR</div>
      <p className="text-xl">
        Join us in volunteering on a work crew to assist participating Block
        Management Areas with tasks such as fence repair, stackyard
        construction, and trash removal.
      </p>
      <p className="text-xl">
        Submit your email to hear about upcoming work days.
      </p>
      <form
        action="/successVolunteer"
        method="POST"
        name="volunteerList"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="volunteerList" />
        <div className="flex flex-col gap-y-2">
          <div className="form-control">
            <label className="input-group">
              <span className="w-22 sm:w-28">First Name</span>
              <input
                required={true}
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Your last name.."
                className="input-bordered input"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group">
              <span className="w-22 sm:w-28">Last Name</span>
              <input
                required={true}
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Your last name.."
                className="input-bordered input"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group">
              <span className="w-22 sm:w-28">Email</span>
              <input
                required={true}
                type="email"
                name="email"
                id="email"
                placeholder="your email.."
                className="input-bordered input"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group">
              <span className="w-22 sm:w-28">Your State</span>
              <input
                required={true}
                type="state"
                name="state"
                id="state"
                placeholder="your state.."
                className="input-bordered input"
              />
            </label>
          </div>
          <button
            type="submit"
            className="btn-outline btn-primary btn mx-auto w-fit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default Support
