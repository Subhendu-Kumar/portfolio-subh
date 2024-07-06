"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ProjectCard({
  title,
  des,
  img,
  iconLists,
  link,
}: {
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-blue-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl border border-zinc-500"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="div"
            className="flex items-center gap-1"
          >
            {iconLists &&
              iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[0.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                  style={{ transform: `translateX(-${5 * index * 2}px)` }}
                >
                  <img src={icon} alt={icon} className="p-2" />
                </div>
              ))}
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Visit
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
