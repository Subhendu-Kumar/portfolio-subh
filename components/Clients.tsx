import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20 w-full h-auto" id="testimonials">
      <h1 className="heading text-purple">Words Form Clients !</h1>
      <div className="flex items-center flex-col lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
