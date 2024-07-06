import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full pt-10 pb-4" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">Your</span> digital
          presence to next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out me today and let&apos;s discuss how i can help you to
          achieve your goals!
        </p>
        <a href="mailto:subhendukumardutta330@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="p-4 w-full flex items-center justify-between md:flex-row flex-col gap-4 text-base mt-40">
        <div className="flex items-center">
          <p>&copy; {currentYear}&nbsp;&nbsp;</p>
          <p className="hover:underline">Subhendu Kumar</p>
        </div>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              className="cursor-pointer w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-purple rounded-full"
              href={item.link}
            >
              <img src={item.img} alt={item.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
