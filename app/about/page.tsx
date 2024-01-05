import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Work",
  description: "My work and experience.",
};

function Work() {
  return (
    <section>
      {/* <div className="mt-32 flex flex-col items-start">
        <h1 className="text-netural-950 text-2xl font-medium tracking-tighter">
          Johan Grundstörm Eriksson
        </h1>
        <p className="prose mt-8 text-neutral-700">
          Advisory Interim Consulting
        </p>
      </div> */}
      <div className="my-8 mt-32 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt="Johan Grundström Eriksson 1"
            src="/photos/johanErikkson.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt="Johan Grundström Eriksson 2"
            src="/photos/2.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-left"
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt="Me as EITM jury"
            src="/photos/3.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-[-160px]"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt="ISPIM Innovation Conference Johan Grundström Eriksson, Sony Mobile Communications"
            src="/photos/4.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt="Johan Grundström Eriksson 3"
            src="/photos/5.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Johan Grundström Eriksson 4"
            src="/photos/6.jpg"
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <h1 className="mb-2 mt-32 text-2xl font-medium tracking-tighter text-neutral-950">
        Work and experience
      </h1>
      <p>
        On a mission to identifying and initiating new value and impact.
        Here&apos;s a summary of my work so far.
      </p>
      <div className="prose text-neutral-700">
        <hr className="my-6 border-neutral-600" />
        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          Sony
        </h2>
        <p className="text-sm text-neutral-700">
          Strategy & Innovation Management - Contract (Oct 2022 - Present)
        </p>
        <p>
          Engaged in Strategy & Innovation Management assignments at Sony since
          October 2022.
        </p>
        <hr className="my-6 border-neutral-200" />

        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          aiRikr Innovation AB
        </h2>
        <p className="text-sm text-neutral-700">
          May 2020 - Present · Lund, Skane County, Sweden
        </p>
        <p>
          Business consulting, Strategy & Innovation Management and building
          capacity and collaboration to digitalize and pursue sustainable
          innovation and digitalization.
        </p>
        <hr className="my-6 border-neutral-200" />
        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          ISO TC 279 - Innovation Management
        </h2>
        <p className="text-sm text-neutral-700">
          International Expert (2013 - Present)
        </p>
        <p>
          Creating a completely new set of standards as a guideline to better
          support innovation management.
        </p>
        <hr className="my-6 border-neutral-200" />

        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          UNOPS Global Innovation Center Sweden
        </h2>
        <p className="text-sm text-neutral-700">
          Advisory Board (Apr 2020 - Jul 2023)
        </p>
        <p>
          Advisory Board supporting UNOPS Global Innovation Center Sweden,
          created by Ideon Science Park.{" "}
        </p>
        <hr className="my-6 border-neutral-200" />

        {/* <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          EIT Manufacturing
        </h2>
        <p className="text-sm text-neutral-700">
          Interim Head of Innovation (Sep 2020 - Apr 2023)
        </p>
        <p>[Description of role and responsibilities at EIT Manufacturing]</p>
        <hr className="my-6 border-neutral-200" /> */}

        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          Great IT
        </h2>
        <p className="text-sm text-neutral-700">
          Interim Head of Innovation (Oct 2022 - Mar 2023) · Nordics, Baltics &
          Japan · Hybrid
        </p>
        <p>
          Start up and incubation of business plan for Innovation Management
          consulting services and match-making of innovation managers to
          customer needs. Provided competences to assess innovation maturity,
          identify gaps and obstacles preventing the success of pursuing
          innovation opportunities. Providing the resources to address customer
          needs in building the capability to innovate and the capacity to be
          more successful at managing their innovation.
        </p>
        <hr className="my-6 border-neutral-200" />
        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          Sony
        </h2>
        <p className="text-sm text-neutral-700">
          Deputy Head of Site Mgmt Office (Jan 2018 - Mar 2020)
        </p>
        <ul>
          <li>Site Strategy, Innovation, Incubation & Business Development.</li>

          <li>External Relations Partnerships & Sponsoring. </li>
          <li>Advisor, UNOPS Global Innovation Centers. </li>
          <li>
            Trade & Industry Advisory Board member, Faculty of Engineering
            (LTH), Lund University.
          </li>
          <li>Senior Advisor, Innovation Management.</li>
        </ul>
        <p className="text-sm text-neutral-700">
          Deputy Head of Management System & Audits, Corporate Strategy (Apr
          2015 - Jan 2018)
        </p>
        <ul>
          <li>
            Driver of Sony Mobile&apos;s management system integration.
            Innovation & Site Strategy, Innovation capacity beyond smartphones.
          </li>
          <li>
            Long-term management system planning (Innovation, Quality,
            Environment, Info Sec).
          </li>
        </ul>
        <hr className="my-6 border-neutral-200" />

        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          Berghs School of Communication
        </h2>
        <p className="text-sm text-neutral-700">
          Lecturer, Innovation Management in Practice (Jan 2014 - 2016)
        </p>
        <p>
          Planning, integration, and execution of Corporate Management System
          (MS) with Quality, Environment, Info Sec & Innovation Management
          embedded.
        </p>
        <hr className="my-6 border-neutral-200" />
        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          Sony
        </h2>
        <p className="text-sm text-neutral-700">
          Senior Manager of Corporate Management System (2012 - 2015)
        </p>
        <ul>
          <li>
            Planning, integration and execution of Corporate Management System
            (MS) with Quality, Environment, Info Sec & Innovation Management
            embedded.
          </li>
          <li>
            Corporate Strategy, Business Process and Management facilitator n
            MS&A of the Corporate Strategy function for Sony Mobile world wide
          </li>
          <li>
            International expert: Technical Committee ISO/TC 279 Innovation
            Management System
          </li>
        </ul>
        <p className="text-sm text-neutral-700">
          Head of Process & Methods (2010 - 2012)
        </p>
        <ul>
          <li>Corporate Governance & Global Operational Development </li>
        </ul>
        <p className="text-sm text-neutral-700">
          Operational Development Manager, Portfolio & propositions (2008 -
          2009)
        </p>
        <ul>
          <li>
            Root Cause analysis, strategic & operational improvements and
            Transformation Facilitator Early ramp up and redesign of product
            development model
          </li>
        </ul>
        <hr className="my-6 border-neutral-200" />
        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          Tetra Pak
        </h2>
        <p className="text-sm text-neutral-700">
          Senior Manager, PMO in Global Development & Engineering (2006 - 2008)
        </p>
        <ul>
          <li>General management establishing PMO Service Management </li>
          <li>
            Business needs & improvement planning for Portfolio-, Program- and
            Project Management
          </li>
          <li>Product Development capability mgmt</li>
          <li>SW Development Governance</li>
        </ul>
        <p className="text-sm text-neutral-700">
          Global System Owner, Innovation Management (2001 - 2006)
        </p>
        <ul>
          <li>Manager in the corporate technology unit, CTO function. </li>
          <li>
            Global program management for Business Process Management, balancing
            process improvement and process automation for Innovation.
          </li>
          <li>
            Management, industrially critical SW development & lifetime
            maintenance
          </li>
          <li>
            Contracting, sourcing and management of outsourced software system
            development
          </li>
        </ul>
        <hr className="my-6 border-neutral-200" />

        <h2 className="mb-1 text-xl font-medium tracking-tighter text-neutral-950">
          Ericsson Mobile Communications & Sony Ericsson
        </h2>
        <p className="text-sm text-neutral-700">
          Customer Support Manager, Southern Europe (Jul 2001 - Nov 2001)
        </p>
        <p>
          Operations management of Customer Support for region Southern Europe,
          Middle East & Africa.
        </p>
        <hr className="my-6 border-neutral-200" />
      </div>
    </section>
  );
}

export default Work;
