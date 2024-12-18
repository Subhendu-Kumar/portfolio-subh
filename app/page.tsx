import { navItems } from "@/data";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import AllProjectsNew from "@/components/AllProjectsNew";
import { FloatingNav } from "@/components/ui/FloatingNav";

// import AllProjects from "@/components/AllProjects";
// import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        {/* <RecentProjects /> */}
        {/* <AllProjects /> */}
        <AllProjectsNew />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
