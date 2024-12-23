import React from 'react'
import Image from 'next/image';
import Link from "next/link";

export default function Topheader() {
  return (
    <>
    <div className="flex justify-between w-[1440px]
h-[36px]
gap-[0px]
opacity-[0px]
 items-center px-10 bg-light-gray">
    {/* Top Logo */}
      <Image src="/favicon.svg" alt="Top Logo" width={20} height={20}/>
       <ul className="flex space-x-6 py-3">
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/store" className="leading-[14px]">
              Find a Store
            </Link></li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/contact-us" className="leading-[14px]">
              Help
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/join-us" className="leading-[14px]">
              Join Us
            </Link>
          </li>
          <li className="flex items-center pr-6">
            <Link href="/login" className="leading-[14px]">
              Sign In
            </Link>
          </li>
        </ul>

      </div>
      </>
  )}