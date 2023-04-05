import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 text-xs sm:text-sm">
      <div className="grid grid-flow-col gap-4">
        <a className="link-hover link" href={"/#about"}>
          About us
        </a>
        <a className="link-hover link" href={"/support"}>
          Support
        </a>
        <a className="link-hover link" href={"/contact"}>
          Contact
        </a>
        <a className="link-hover link" href={"/calendar"}>
          Upcoming events
        </a>
      </div>
      <div>
        <p>Copyright © 2023 - Hunters for Access</p>
      </div>
    </footer>
  );
}

export default Footer;
