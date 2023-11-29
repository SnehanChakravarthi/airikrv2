import Link from "next/link";
import React from "react";

const links = [
  { id: 1, name: "home", href: "/" },
  { id: 2, name: "work", href: "/work" },
  { id: 3, name: "blog", href: "/blog" },
];

function Header() {
  return (
    <div className="fixed top-0 z-20 flex h-10 w-screen justify-center gap-10 border-b border-neutral-800 bg-[#111010] py-8 text-neutral-50">
      <div
        className="container flex flex-row items-center justify-between"
        style={{ width: "48rem" }}
      >
        <nav className="flex flex-row gap-6">
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.href}>
                <div className="hover:text-neutral-300">{link.name}</div>
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-row items-center justify-center gap-4">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/grundstromeriksson/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 28 28"
              className="fill-neutral-300"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a href="mailto:johan@airikr.com">johan@airikr.com</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
