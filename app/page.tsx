import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects_dev";
import Contact from "@/components/Contact";


export default function Home() {
return (
<main className="bg-zinc-950 text-white min-h-screen">
<Header />
<Hero />
<About />
<Projects />
<Contact />
</main>
);
}