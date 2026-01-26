const designs = [
  {
    title: "Mecanica do Joao",
    desc: "Logo e identidade visual para oficina mecânica do João.",
    tags: ["Logo", "Branding", "Canva"],
    image: "/img/logojoaomecanico.png",
  },
];

export default function ProjectsDesign() {
  return (
    <section id="projects_design" className="bg-zinc-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-white">Design & Branding</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {designs.map((d, i) => (
            <a
              key={i}
              href={d.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Container da Imagem */}
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img 
                  src={d.image} 
                  alt={d.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Conteúdo de Texto */}
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-zinc-100">{d.title}</h4>
                <p className="text-zinc-400 text-sm mb-4">{d.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] uppercase tracking-wider bg-blue-900/20 px-2 py-1 rounded text-blue-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}