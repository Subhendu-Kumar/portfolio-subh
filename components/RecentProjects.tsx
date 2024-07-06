import { projects } from "@/data";
import React from "react";
import { ProjectCard } from "./ProjectCard";

const RecentProjects = () => {
  return (
    <div className="py-20 w-full h-auto" id="projects">
      <h1 className="heading text-purple">Recent Projects !</h1>
      <div className="flex flex-wrap max-sm:flex-col items-center justify-center p-4 gap-6 mt-10 w-full h-auto">
        {projects &&
          projects.map(({ id, title, des, img, iconLists, link }) => {
            return (
              <ProjectCard
                key={id}
                title={title}
                des={des}
                img={img}
                iconLists={iconLists}
                link={link}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RecentProjects;
