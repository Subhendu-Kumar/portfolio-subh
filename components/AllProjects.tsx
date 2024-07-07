import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Allprojects, testimonials } from "@/data";

const AllProjects = () => {
  return (
    <div className="py-20 w-full h-auto max-sm:hidden" id="testimonials">
      <h1 className="heading text-purple">All Projects !</h1>
      <div className="flex items-center flex-col lg:mt-10">
        <InfiniteMovingCards
          items={Allprojects}
          direction="left"
          speed="fast"
        />
      </div>
    </div>
  );
};

export default AllProjects;
