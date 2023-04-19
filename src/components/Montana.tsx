import Link from "next/link"
import ImageSlider from "./ImageSlider"

function Montana() {
  return (
    <div>
      <h1 className='mb-10 font-robotoSlab text-5xl font-bold'>Montana Hunters for Access</h1>
      <p className="py-6 text-xl">
        The Montana chapter of Hunters for Access is an organization dedicated to
        preserving public access for hunters in Montana. Our focus is on
        supporting the Block Management Program, a program run by Montana
        Fish, Wildlife, and Parks that compensates farmers, ranchers, and
        other landowners for permitting public access to their land, using
        funds from hunting license sales. However, this program is at risk
        due to poor behavior from some hunters and the high fees that
        outfitters and wealthy hunters are willing to pay for exclusive
        access to land. We are committed to advocating for the continuation
        and improvement of this important program.
      </p>
      <ImageSlider />
      <p className="mt-2 italic text-base-content">
        (In 2022, over 6.8 million acres of land enrolled in the Block
        Management Program are highlighted in red above. These lands are
        surrounded by private lands or Federal Indian Reservations, which
        are depicted in white. National Park Service lands are shown in
        light purple, Montana State Lands are shown in light blue, Bureau of
        Land Management lands are shown in tan, U.S. Forest Service lands
        are shown in light green, and U.S. Fish and Wildlife Service lands
        are shown in green.)
      </p>
      <p className="py-6 text-xl">
        We are devoted to combating the monopolization of hunting
        opportunity by showing appreciation to Block Management enrollees
        and incentivizing them to remain in the program. We do this by
        raising funds for appreciation gifts including agricultural supplies
        and equipment and gift certificates to local farm and ranch supply
        stores. Additionally, we organize work crews to conduct labor on
        participating farms and ranches, such as fixing fence, erecting
        stackyards, and cleaning up trash. If you want to help protect this access,
        please consider supporting us through <Link className="text-cyan-700 hover:text-cyan-500" href={'/support'}>donations or volunteering</Link> your time.
      </p>
    </div>
  )
}

export default Montana
