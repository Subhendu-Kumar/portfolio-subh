"use client";

import React, { useRef, FormEvent } from "react";
import { socialMedia } from "@/data";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2zpidkv", "template_39yxa5u", form.current!, {
        publicKey: "wqQIfnTRanDOgd-I7",
      })
      .then(
        () => {
          form.current!.reset();
          alert("successfully sent the email");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("error when sending message");
        }
      );
  };
  return (
    <footer className="w-full pt-10 pb-4" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Are you ready to enhance <span className="text-purple">your</span>{" "}
          online presence significantly?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in touch with me today, and let&apos;s explore how I can assist
          you in achieving your goals!
        </p>
        <form
          action=""
          noValidate
          autoComplete="off"
          className="w-full h-auto p-4 max-sm:p-0 flex justify-center items-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <div
            className="flex items-center flex-col justify-center w-[60vw] max-sm:w-full px-20 py-10 max-sm:px-4 max-sm:py-6 rounded-xl p-4 gap-4 border border-zinc-700"
            style={{
              background: "rgb(3,2,31)",
              backgroundColor:
                "linear-gradient(90deg, rgba(3,2,31,1) 0%, rgba(8,5,45,1) 52%, rgba(3,24,54,1) 100%)",
            }}
          >
            <div className="w-full flex justify-center items-center gap-4 max-sm:flex-col">
              <div className="w-[50%] max-sm:w-full flex flex-col gap-1">
                <p className="text-lg max-sm:text-sm font-semibold text-white-200">
                  Full Name:<span className="text-red-600"> *</span>
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full h-16 rounded-xl px-6 max-sm:px-2 text-base max-sm:text-xs focus:outline-none focus:ring-0 border border-zinc-700 bg-blue-950"
                />
              </div>
              <div className="w-[50%] max-sm:w-full flex flex-col gap-1">
                <p className="text-lg max-sm:text-sm font-semibold text-white-200">
                  Email:<span className="text-red-600"> *</span>
                </p>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full h-16 bg-blue-950 rounded-xl px-6 max-sm:px-2 text-base max-sm:text-xs focus:outline-none focus:ring-0 border border-zinc-700"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <p className="text-lg max-sm:text-sm font-semibold text-white-200">
                Subject:<span className="text-red-600"> *</span>
              </p>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full h-24 bg-blue-950 rounded-xl p-4 max-sm:px-2 text-base max-sm:text-xs focus:outline-none focus:ring-0 border border-zinc-700"
              />
            </div>
            <button
              className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-4"
              type="submit"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="h-full w-full cursor-pointer flex items-center justify-center rounded-lg bg-slate-950 px-7 text-base font-medium text-white backdrop-blur-3xl gap-2">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
      <div className="p-4 w-full flex items-center justify-between md:flex-row flex-col gap-4 text-base mt-24">
        <div className="flex items-center">
          <p>Copywrite &copy; {currentYear}&nbsp;&nbsp;</p>
          <p className="hover:underline">@ Subhendu Kumar</p>
        </div>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              className="cursor-pointer w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-purple rounded-full hover:scale-105 transition-transform duration-300 hover:bg-[#e1bbf0]"
              href={item.link}
              target="_blank"
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
