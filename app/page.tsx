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
        className="flex w-full items-center justify-between rounded border border-neutral-800 bg-neutral-900 px-3 py-4"
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
            <p className="font-medium text-neutral-100">{name}</p>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </Link>
    </div>
  );
}
function Org2Links({
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
      <div className="flex w-full items-center justify-center rounded border border-neutral-800 bg-neutral-900 px-3 py-4">
        <div className="relative flex h-16 items-center justify-center">
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes="33vw"
            className=" h-14 w-auto"
            priority
          />
        </div>
        {/* <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div> */}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-stretch justify-center">
      <div className="flex min-h-screen flex-col ">
        <div className="mt-32 flex flex-col items-start">
          <h1 className="text-2xl font-medium tracking-tighter text-white">
            Hi, I&apos;m Johan Grundstörm Eriksson 👋🏼
          </h1>
          <p className="prose mt-8 text-neutral-400">
            In irure reprehenderit aliqua do. In nulla et dolor sit sint id
            Lorem reprehenderit sunt laboris sunt consequat magna officia. Ex
            cupidatat occaecat laborum ad irure. Ipsum labore elit ea sint elit.
          </p>
        </div>
        <div className="my-8 columns-2 gap-4 sm:columns-3">
          <div className="relative mb-4 h-40">
            <Image
              alt="Johan Grundström Eriksson"
              src="/photos/JohanGE_fotoCharlotteCarlbergBarg_8747.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-top"
            />
          </div>
          <div className="relative mb-4 h-80 sm:mb-0">
            <Image
              alt="Johan Grundström Eriksson"
              src="/photos/small_img_1891_sony_johan_grundstrom.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-left"
            />
          </div>
          <div className="relative h-40 sm:mb-4 sm:h-80">
            <Image
              alt="Me as EITM jury"
              src="/photos/Johan-Grundström-Eriksson-EITM-jury2.JPG"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover sm:object-[-190px]"
            />
          </div>
          <div className="relative mb-4 h-40 sm:mb-0">
            <Image
              alt="ISPIM Innovation Conference I Johan Grundström Eriksson, Sony Mobile Communications"
              src="/photos/ISPIM Innovation Conference I Johan Grundström Eriksson, Sony Mobile Communications 0-45 screenshot.png"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative mb-4 h-40">
            <Image
              alt="Johan Grundström Eriksson"
              src="/photos/83012500_567017943851610_8729094603292016640_n.png"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              alt="Johan Grundström Eriksson"
              src="/photos/Björn-bild-EITM-Skövde.JPG"
              fill
              sizes="(min-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="prose text-neutral-400">
          <p>
            Duis consectetur duis Lorem dolor. Sunt id aliqua magna incididunt
            ut ullamco qui consectetur mollit nulla officia fugiat. Pariatur
            pariatur consectetur esse quis ipsum anim ut tempor enim. Quis
            officia aliquip consequat veniam non ea laboris consequat.
          </p>
        </div>
        <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <OrgLinks
            img="/ISO_Logo_(Red_square).svg.png"
            name="ISO/TC 279"
            link="https://www.iso.org/committee/4587737.html"
            height={14}
          />
          <OrgLinks
            img="/LOGOTYPE.png"
            name=""
            link="https://japanbridgescandinavia.se/"
          />
          <OrgLinks
            img="/hiveonline-logo-orange-long.png"
            name=""
            link="https://www.hivenetwork.online/"
          />
        </div>
        <div className="prose text-neutral-400">
          <p>
            Incididunt eu sunt ad magna aliquip. Do mollit eu cupidatat irure
            nostrud Lorem in Lorem commodo aute excepteur labore enim veniam.
            Lorem est ad incididunt et cupidatat et exercitation. Sit amet
            officia velit aute ex ea sint.
          </p>
        </div>
        <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Org2Links
            img="/aiRikr_Innovation_horisontal_colour_inv.png"
            name=""
            link="https://www.hivenetwork.online/"
            height={14}
          />
          <Org2Links
            img="/kisspng-sony-xperia-s-sony-xperia-z-sony-mobile-north-shor-hertz-corporation-5b2bf01b537c48.567543561529606171342.png"
            name=""
            link="https://www.hivenetwork.online/"
          />
        </div>
        <div className="prose text-neutral-400">
          <p>
            Incididunt eu sunt ad magna aliquip. Do mollit eu cupidatat irure
            nostrud Lorem in Lorem commodo aute excepteur labore enim veniam.
            Lorem est ad incididunt et cupidatat et exercitation. Sit amet
            officia velit aute ex ea sint.
          </p>
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
