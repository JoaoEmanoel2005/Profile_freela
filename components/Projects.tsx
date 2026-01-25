
const projects = [
{
title: "StudyConnect",
desc: "Plataforma educacional com autenticação JWT e API REST.",
tech: "Next.js, Node.js, PostgreSQL",
},
{
title: "Tema WordPress Darkside",
desc: "Tema profissional customizado a partir de layout HTML/CSS.",
tech: "WordPress, PHP, JS",
},
{
title: "API Cursos",
desc: "API REST para gerenciamento de cursos e instituições.",
tech: "Node.js, Express, JWT",
},
];


export default function Projects() {
return (
<section id="projects" className="bg-zinc-900 py-24">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-3xl font-bold mb-10">Projetos</h3>


<div className="grid md:grid-cols-3 gap-6">
{projects.map((p, i) => (
<div key={i} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-blue-600 transition">
<h4 className="font-bold text-xl mb-2">{p.title}</h4>
<p className="text-zinc-400 mb-4">{p.desc}</p>
<span className="text-sm text-blue-500">{p.tech}</span>
</div>
))}
</div>
</div>
</section>
);
}