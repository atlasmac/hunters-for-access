import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

function NavBar() {
  return (
    <div className="navbar sticky top-0 z-30 bg-base-100 font-robotoSlab text-neutral-content">
      <div className="dropdown lg:hidden">
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
          <li tabIndex={0}>
            <span>Chapters</span>
            <ul className="bg-base-100 p-2">
              <li>
                <Link href="/states/Montana">Montana</Link>
              </li>
              <li>
                <Link href="/states/Kansas">Kansas</Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <Link href={"/blog"}>Blog</Link>
          </li> */}
          <li>
            <Link href={"/support"}>Support</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
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
          {/* <li>
            <Link href={"/blog"}>Blog</Link>
          </li> */}
          <li tabIndex={0}>
            <a>
              Chapters
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><Link href={'states/montana'}>Montana</Link></li>
              <li><Link href={'states/kansas'}>Kansas</Link></li>
            </ul>
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
