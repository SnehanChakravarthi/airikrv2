import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  { id: 1, name: "about", href: "/about" },
  { id: 2, name: "blog", href: "/blog" },
];

function Header() {
  return (
    <div className="fixed top-0 z-20 flex h-auto w-screen items-center justify-center border-b bg-neutral-100 text-neutral-950">
      <div className="container flex max-w-5xl flex-row items-center justify-between py-3 ">
        <nav className="flex w-full flex-row items-center justify-between gap-6 ">
          <Link href="/">
            <Image
              src="/aiRikr_Innovation_horisontal_colour.png"
              alt="aiRikr"
              width={200}
              height={200}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-row items-center gap-6">
              {links.map((link) => {
                return (
                  <Link key={link.id} href={link.href}>
                    <div className="hover:text-neutral-800">{link.name}</div>
                  </Link>
                );
              })}
            </div>
            <div className="">
              <a
                className="flex items-center transition-all hover:text-neutral-500 "
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/grundstromeriksson/"
              >
                <ArrowUpIcon className="rotate-45" />
                <p className="">reach me</p>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
