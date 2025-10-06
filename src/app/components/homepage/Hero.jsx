"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShootingStars from "./ShootingStars";

function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ShootingStars/>
      <div className="h-full w-full flex flex-col relative overflow-hidden">
        <div
          className="w-full h-full layer flex items-end"
          style={{ transform: `translateY(-${offset * 0.01}px)` }}
        >
          <img
            src="/hero/Layer7.svg"
            height={100}
            width={100}
            alt=""
            className="w-full object-cover h-[95%] sm:h-[85%] xl:h-auto"
          />
        </div>

        <div
          className="w-full h-full absolute flex items-center overflow-hidden"
          style={{ transform: `translateY(-${offset * 0.015}px)` }}
        >
          <Image
            src="/hero/Hoarding.svg"
            height={100}
            width={100}
            alt=""
            className="w-full h-[100%] scale-120 sm:scale-90 sm:h-[50%] sm:mb-[30%] md:mb-[30%] lg:mb-[20%] xl:mb-[10%] xl:scale-100"
          />
        </div>

        <div
          className="w-full h-full absolute flex items-end"
          style={{ transform: `translateY(-${offset * 0.09}px)` }}
        >
          <Image
            src="/hero/Layer6.svg"
            height={100}
            width={100}
            alt=""
            className="w-full object-cover h-[60%] sm:h-[80%] xl:h-auto"
          />
        </div>

        <div
          className="w-full h-full absolute flex items-end"
          style={{ transform: `translateY(-${offset * 0.25}px)` }}
        >
          <Image
            src="/hero/Layer5.svg"
            height={100}
            width={100}
            alt=""
            className="w-full object-cover h-[50%] sm:h-[60%] xl:h-auto"
          />
        </div>

        <div
          className="w-full h-full absolute flex items-end"
          style={{ transform: `translateY(-${offset * 0.3}px)` }}
        >
          <Image
            src="/hero/Layer4.svg"
            height={100}
            width={100}
            alt=""
            className="w-full object-cover h-[40%] sm:h-[70%] xl:h-auto"
          />
        </div>

        <div
          className="w-full h-full absolute flex items-end"
          style={{ transform: `translateY(-${offset * 0.35}px)` }}
        >
          <Image
            src="/hero/Layer3.svg"
            height={100}
            width={100}
            alt=""
            className="w-full object-cover h-[40%] sm:h-[70%] xl:h-auto"
          />
        </div>

        <div
          className="w-full h-full absolute flex items-end"
          style={{ transform: `translateY(-${offset * 0.4}px)` }}
        >
          <img
            src="/hero/Layer2.webp"
            height={100}
            width={100}
            alt=""
            className="w-full object-cover h-0 sm:h-[65%] xl:h-auto"
          />
        </div>

        <div
          className="w-full h-full absolute flex items-end"
          style={{ transform: `translateY(-${offset * 0.45}px)` }}
        >
          <Image
            src="/hero/Layer1.svg"
            height={100}
            width={100}
            alt=""
            className="w-full object-cover h-[14%] sm:h-[10%] xl:h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
