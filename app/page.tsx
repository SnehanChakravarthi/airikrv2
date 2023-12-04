import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
function OrgLinks({
  img,
  name,
  link,
  height,
}: {
  img: string;
  name: string;
  link: string;
  height?: number;
}) {
  return (
    <div className="group flex w-full">
      <Link
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-3 py-4 shadow-md"
      >
        <div className="flex items-center space-x-3">
          <div className="relative flex h-16 items-center">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className={cn(" w-auto rounded-full", height && "h-16")}
              priority
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-800">{name}</p>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-stretch justify-center">
      <div className="flex flex-col justify-center">
        <div className="mt-32 flex h-full w-full flex-col gap-20">
          <div className="flex w-full flex-col items-center justify-between gap-10 sm:flex-row sm:gap-0 sm:divide-x">
            <Image
              alt="Innovation Management Model"
              src="/Asset 51.png"
              height={500}
              width={500}
              className="sm:w-1/2 sm:pr-6"
            />
            <Image
              alt="Innovation Management Principles"
              src="/Asset 31.png"
              height={500}
              width={500}
              className="sm:w-1/2 sm:pl-6"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-between sm:flex-row sm:px-4">
            <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row sm:items-end sm:gap-10">
              <div className="flex h-auto flex-row items-end gap-6">
                <div className="h-full overflow-hidden rounded-lg">
                  <Image
                    alt="AI Rikr Innovation Logo"
                    src="/photos/johanErikkson.jpg"
                    height={200}
                    width={200}
                    className="translate-y-6 scale-150 pb-2"
                  />
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-medium uppercase leading-none tracking-tighter text-black">
                      Johan <br /> Grundstörm <br /> Eriksson
                    </h1>
                    <p className="">Advisory Interim Consulting</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-end gap-6">
                <Image
                  alt="AI Rikr Innovation Logo"
                  src="/aiRikr_Innovation_vertical_black.png"
                  height={200}
                  width={200}
                  className="h-32 w-auto pb-2"
                />
                <div>
                  <br /> Innovation Management <br />
                  Strategy Management
                  <br /> Corporate Governance
                  <br /> Assessment & Audit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col">
        <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <OrgLinks
            img="/ISO_Logo_(Red_square).svg.png"
            name="ISO/TC 279"
            link="https://www.iso.org/committee/4587737.html"
            height={14}
          />
          <OrgLinks
            img="/LOGOTYPE.webp"
            name=""
            link="https://japanbridgescandinavia.se/"
          />
          <OrgLinks
            img="/hiveonline-logo-orange-long.png"
            name=""
            link="https://www.hivenetwork.online/"
          />
        </div>

        <div className="mt-10">
          <a
            className="flex items-center transition-all hover:text-neutral-500 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/grundstromeriksson/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col items-center gap-16">
            <div className="px-8 py-6">
              <Image
                alt="AI Rikr Innovation Logo"
                src="/photos/johanErikkson.jpg"
                height={200}
                width={200}
                className="rounded-t-xl"
              />
              <h1 className="text-2xl font-medium uppercase tracking-tighter text-black">
                Johan Grundstörm Eriksson
              </h1>
              <h2 className=" text-neutral-800">Advisory Interim Consulting</h2>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-100 px-8 py-6 shadow-lg">
              <Image
                alt="AI Rikr Innovation Logo"
                src="/aiRikr_Innovation_horisontal_colour.png"
                height={200}
                width={200}
              />
              <h2 className="mt-4 text-center text-neutral-800">
                Innovation Management <br /> Strategy Management
                <br /> Corporate Governance
                <br /> Assessment & Audit
              </h2>
            </div>
          </div> */
}
