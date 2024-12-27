import { skills } from "@/data";

const AllSkills = () => {
  return (
    <div className="py-20 w-full h-auto" id="projects">
      <h1 className="heading text-purple">My Skills</h1>
      <div className="w-full h-auto flex flex-wrap items-center justify-center gap-6 mt-10">
        {skills.map((data, idx) => {
          return (
            <div
              key={idx}
              className="w-32 h-32 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out bg-black border border-white/[0.5] rounded-full justify-center flex items-center relative group"
            >
              <img src={data.image} alt={data.name} className="w-20 h-20" />
              <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-6 bg-gray-500 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {data.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-full h-auto flex items-center justify-end mt-3 text-purple font-medium text-sm">
        And many more skills.....
      </div>
    </div>
  );
};

export default AllSkills;
