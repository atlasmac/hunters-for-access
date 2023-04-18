import Donate from "./Donate"

function Support() {
  const allOptions = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

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
      <p className="text-xl">
        Help us raise funds for appreciation gifts such as agricultural
        supplies and equipment and local farm and ranch store gift
        certificates for landowners that provide public access through Block
        Management.
      </p>
      <Donate />
    </>
  )
}

export default Support
