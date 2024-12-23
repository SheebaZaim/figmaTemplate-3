
import Image from "next/image";
import Link from "next/link";

import nikeBanner from "@public/images/nike-banner.jpg";
import { ArrowLeft } from 'lucide-react';
  import { ArrowRight } from 'lucide-react';

import BestSection from "@/app/components/BestSection/BestSection";


export default function Home() {
  return (
    <>

      <div className="flex items-center flex-col bg-light-gray py-2">
        <h2>Hello Nike App</h2>
        <p className='flex'>
          Download the app to access everything Nike.
          <Link href="#">Get Your Great</Link>
        </p>
      </div>
      <section className=" px-10">
        <Image src={nikeBanner} alt="" />
        <div className="flex flex-col items-center">
          <h3>First Look</h3>
          <h2 className="text-5xl uppercase">Nike Air Max Pulse</h2>
          <p className="w-1/2 text-center">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the
            max.
          </p>
          </div>
          <div className="flex  justify-center items-center w-[1008px] h-[45px] top-[184px] px-[379.64px] py-[8px] gap-[6px] ">
          <button className="w-[110.58px] h-[39px] px-[22.08px] py-[7.5px] gap-0 rounded-full  bg-[#111111] text-[#FFFFFF]
 text-sm font-medium">Notify Me</button>
          <button  className="w-[110.58px] h-[39px] px-[30px] py-[9px] gap-0  bg-[#111111] text-[#FFFFFF] rounded-full">
  
Shop Air Max</button>
          
        </div>
      </section>
      <BestSection/>
      
    </>
  );
}