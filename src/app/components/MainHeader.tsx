import React from 'react'
import Image from "next/image";
// import Logo from "/logo.svg";
import wishlistIcon from "@public/images/icons/wishlist.svg";
import CartIcon from "@public/images/icons/cart.svg";
import SearchIcon from "@public/images/icons/search.svg";
import Link from "next/link";

const MainHeader = () => {
  return (
    <div>
      <div className="flex px-10 justify-between items-center py-4 w-[1440px]
h-[60px]
gap-[0px]
opacity- [0px]
">
        <Link href="/">
          <Image src='/logo.svg' alt="logo" width={70} height={70} className="top-[-8.74px]
left-[38.26px]
gap-[0px]
opacity-[0px]"

/>
        </Link>
        <ul className="flex space-x-6 justify-center">
            <li>
                <Link href="#">New & Featured</Link>
            </li>
            <li>
                <Link href="#">Men</Link>
            </li>
            <li>
                <Link href="#">Women</Link>
            </li>
            <li>
                <Link href="#">Kids</Link>
            </li>
            <li>
                <Link href="#">Sale</Link>
            </li>
            <li>
                <Link href="#">SNKRS</Link>
            </li>
        </ul>
        <div className="flex space-x-6">
            <div className="flex px-4 py-3 rounded-full  bg-[#F5F5F5]
w-[180px]
height-[40px]
top-[10px]
left-[1011px]
gap-[0px]
opacity-[0px]
">
                <Image src={SearchIcon} alt="wishlist"/>
                <input className="pl-4 focus-visible:outline-none w-[64%] bg-light-gray" type="text" placeholder="Search" name="" id="" />
            </div>
            <Image src={wishlistIcon} alt="wishlist"/>
            <Image src={CartIcon} alt="cart"/>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
