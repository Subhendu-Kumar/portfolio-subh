import { skills } from "@/data";

const AllSkills = () => {
  return (
    <div className="py-20 w-full h-auto" id="skills">
      <h1 className="heading text-purple">Skilled With</h1>
      <div className="w-full h-auto flex flex-wrap items-center justify-center gap-6 mt-10">
        {skills.map((data, idx) => {
          return (
            <div
              key={idx}
              className="sm:w-32 sm:h-32 h-16 w-16 cursor-pointer group hover:scale-110 transition-all duration-300 ease-in-out bg-black border border-white/[0.5] rounded-full justify-center flex items-center"
            >
              <img
                src={data.image}
                alt={data.name}
                className="sm:w-20 sm:h-20 h-8 w-8 transition-transform duration-300 ease-in-out group-hover:rotate-20"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
