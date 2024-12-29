import Image from "next/image";
import image from "../public/video-verse.png";
import { Allprojects } from "@/data";
import CustomImage from "./CustomImage";

const AllProjectsNew = () => {
  return (
    <div className="py-20 w-full h-auto" id="projects">
      <h1 className="heading text-purple">Projects Done!</h1>
      <div className="w-full h-auto mt-12 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
        {Allprojects.map((data, idx) => {
          return (
            <div
              key={idx}
              className="w-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out h-auto p-3 border border-white/[0.2] rounded-lg flex flex-col items-start justify-between bg-blue-950"
            >
              <div className="w-full h-52 rounded-md border border-gray-400 overflow-hidden">
                <CustomImage src={data.img} hash={data.hash} />
              </div>
              <div className="w-full h-auto mt-3 flex flex-col items-start justify-start">
                <p className="text-xl font-semibold font-sans">{data.title}</p>
                <p className="text-sm font-sans text-white/[0.6] font-normal">
                  {data.description}
                </p>
              </div>
              <div className="w-full flex items-center justify-between mt-8">
                <div className="flex items-center gap-1">
                  {data.iconLists &&
                    data.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[0.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                        style={{ transform: `translateX(-${7 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={data.link}
                    target="__blank"
                    className="px-3 py-1 rounded-md cursor-pointer bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProjectsNew;
