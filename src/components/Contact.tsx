import React from 'react'
import { AiOutlineMail } from "react-icons/ai";


function Contact() {
  return (
    <>
      <div className="w-1/2">
        <h2 className="my-2 font-robotoSlab text-xl sm:text-2xl">
          Get in Touch
        </h2>
        <ul>
          <li>
            <span className='font-thin'>Montana</span>
            <a href="mailto:mrinellabow@gmail.com">

              <div className="flex flex-row items-center justify-center gap-x-1 text-lg hover:text-neutral-content/100 sm:text-xl">
                <AiOutlineMail /> <span>mrinellabow@gmail.com</span>
              </div>
            </a>
          </li>
          <li>
            <span className='font-thin'>Kansas</span>
            <a href="mailto:ozwildlife@gmail.com">

              <div className="flex flex-row items-center justify-center gap-x-1 text-lg hover:text-neutral-content/100 sm:text-xl">
                <AiOutlineMail /> <span>ozwildlife@gmail.com</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="flex w-1/2 flex-col items-center justify-center">
        <h2 className="font-robotoSlab text-xl sm:text-2xl">
          Send us a message here
        </h2>
        <form
          action="/successMessage"
          method="POST"
          name="contact"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="text-lg sm:text-xl">
            <div className="form-control my-2">
              <label className="input-group">
                <span>Email</span>
                <input
                  required={true}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="info@site.com"
                  className="input-bordered input"
                />
              </label>
            </div>
            <div className="form-control my-2">
              <textarea
                required={true}
                id="message"
                name="message"
                className="textarea-bordered textarea w-full"
                placeholder="Your message.."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-outline btn-primary btn mx-auto w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
