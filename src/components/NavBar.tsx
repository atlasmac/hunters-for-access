import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

function NavBar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 font-robotoSlab text-neutral-content">
      <div className="flex-1">
        <Link
          className="btn-ghost btn text-lg normal-case sm:text-2xl "
          href={"/"}
        >
          Hunters for Access
        </Link>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/calendar"}>Upcoming events</Link>
          </li>
          <li>
            <Link href={"/#about"}>About us</Link>
          </li>
          <li>
            <Link href={"/support"}>Support</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown-end dropdown lg:hidden">
        <label tabIndex={0} className="btn m-1">
          <AiOutlineMenu />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <Link href={"/calendar"}>Upcoming Events</Link>
          </li>
          <li>
            <Link href={"/#about"}>About us</Link>
          </li>
          <li>
            <Link href={"/support"}>Support</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
