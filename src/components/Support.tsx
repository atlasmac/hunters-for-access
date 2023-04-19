import Donate from "./Donate"
import { useState } from "react";
import { allOptions } from "../../public/data/states"

function Support() {
  const [state, setState] = useState("");
  const options = allOptions.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  return (
    <>
      <h2 className=" font-robotoSlab text-2xl sm:text-3xl">
        Volunteer for Hunters for Access
      </h2>

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
              <span className="w-24 sm:w-28">First Name</span>
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
              <span className="w-24 sm:w-28">Last Name</span>
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
              <span className="w-24 sm:w-28">Email</span>
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
            <select
              className="select select-bordered w-full max-w-xs"
              required={true}
              name="state"
            >
              <option disabled selected>Your state</option>
              {options}
            </select>
          </div>
          <button
            type="submit"
            className="btn-outline btn-primary btn mx-auto w-fit"
          >
            Submit
          </button>
        </div>
      </form>
      {/* divider */}
      <div className="divider">OR</div>
      <h2 className=" font-robotoSlab text-2xl sm:text-3xl">
        Donate to Hunters for Access
      </h2>
      <h3 className="text-xl">Select a state to donate funds</h3>
      <div className="form-control w-24 sm:w-28">
        <label className="label cursor-pointer">
          <span className="label-text">Montana</span>
          <input type="radio" value={'montana'} name="radio-10" className="radio checked:bg-red-500" onChange={(e) => setState(e.target.value)} />
        </label>
      </div>
      <div className="form-control w-24 sm:w-28">
        <label className="label cursor-pointer">
          <span className="label-text">Kansas</span>
          <input type="radio" value={'kansas'} name="radio-10" className="radio checked:bg-blue-500" onChange={(e) => setState(e.target.value)} />
        </label>
      </div>
      {state === 'montana' && < Donate />}
    </>
  )
}

export default Support
