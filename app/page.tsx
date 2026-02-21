import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projectsdev from "@/components/Projects_dev";
import Contact from "@/components/Contact";
import ProjectsDesign from "@/components/Design";   
import Websites from "@/components/Website";


export default function Home() {
return (
<main className="bg-zinc-950 text-white min-h-screen">
<Header />
<Hero />
<About />
<ProjectsDesign />
<Websites />
<Projectsdev />
<Contact />
</main>
);
}
