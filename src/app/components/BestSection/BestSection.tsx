
"use client"
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { BestItem } from "./BestItem";
import Image from 'next/image';
import b1 from'@public/b1.png';
  import b2 from'@public/b2.png';
  import b3 from'@public/b3.png';
  import { useState } from 'react';
  import { ArrowLeft,ArrowRight } from 'lucide-react';

 

  


const BestSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + BestItem.length) % BestItem.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BestItem.length);
  };

  
  return (
    <section className="px-10 py-6 ">
      <div className="flex flex-row px-11 gap-11 justify-items-between">
        <div><h2 className="text-2xl font-bold mb-4 ">Best of Air Max</h2></div>
      
       <div> <button className="arrow left" onClick={handleLeftClick}>< ArrowLeft/></button>
        <button className="arrow right" onClick={handleRightClick}><ArrowRight/></button>
        </div>
        </div>
      <div className="flex overflow-x-auto space-x-4 ">
        {BestItem.map((item) => (
          <Card key={item.id} className="w-2/3 sm:w-1/3 flex-shrink-0">
            <CardContent>
              <Image src={item.img} alt={item.title} className="w-full rounded-lg" />
            </CardContent>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.title2}</CardDescription>
            </CardHeader>
            <CardFooter>
              <p className="text-lg font-semibold">{item.price}</p>
            </CardFooter>
          </Card>
     ))}
 </div>
</section>
);
};

export default BestSection;
