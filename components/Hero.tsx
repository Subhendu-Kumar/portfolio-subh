import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import logo from "../public/logo1.png";

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw] "
            fill="purple"
          />
          <Spotlight
            className="top-28 left-80 h-[80vh] w-[50vw] "
            fill="blue"
          />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full z-[999] py-6 px-20 max-sm:px-4 bg-transparent flex justify-between items-center max-sm:hidden">
            <div className="flex justify-center items-center gap-2">
              <div className=" max-sm:bg-transparent max-sm:h-8 max-sm:w-8 border-2 border-purple rounded-full flex justify-center items-center">
                <Image src={logo} alt="logo" className="w-8 h-8" />
              </div>
              <h2 className="text-purple font-extrabold text-3xl leading-none uppercase max-sm:text-2xl">
                Subhendu
              </h2>
            </div>
            <a
              className="w-fit h-10 px-4 bg-purple hover:scale-105 transition-transform duration-300 hover:bg-[#e1bbf0] rounded-lg flex justify-evenly items-center gap-1 text-blue-950"
              href="https://wa.me/7008116479"
              target="_blank"
            >
              <FaWhatsapp className="w-6 h-6" />
              <p className="text-base font-semibold">WhatsApp me</p>
            </a>
          </div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col flex items-center justify-center">
            <h2 className="uppercase text-blue-100 text-center text-xs tracking-widest max-w-80">
              Dynamic Web Wonders with FullStack
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Bringing Ideas to Life with Smooth User Experiences"
            />
            <p className="text-center mb-4 md:tracking-wider text-sm md:text-lg lg:text-2xl">
              Hello! I&apos;m <span className="text-purple">Subhendu</span>, a
              Full-Stack Developer from{" "}
              <span className="text-purple">India</span>
            </p>
            <a href="#about">
              <MagicButton
                title="Show my Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
