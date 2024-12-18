import { skills } from "@/data";

const AllSkills = () => {
  return (
    <div className="py-20 w-full h-auto" id="projects">
      <h1 className="heading text-purple">My Skills</h1>
      <div className="w-full h-auto flex flex-wrap items-center justify-center gap-6 mt-10">
        {skills.map((src, idx) => {
          return (
            <div
              key={idx}
              className="w-32 h-32 bg-black border rounded-full justify-center flex items-center"
            >
              <img src={src} alt="logo" className="w-20 h-20" />
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
