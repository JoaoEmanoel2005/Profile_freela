const websites = [
  {
    title: "Data Innovations",
    desc: "Site de vendas de soluções médicas",
    tech: ["Wordpress", "Elementor", "PHP"],
    image: "/img/DataInnovations.png", // Substitua pelo caminho da sua print/mockup
    live: "https://datainnovations.com/",
  },

  {
    title: "Instituição PUCRS",
    desc: "Site sobre a instituição de ensino superior PUCRS",
    tech: ["Wordpress", "Elementor", "PHP"],
    image: "/img/pucrs.png",
    live: "https://portal.pucrs.br/",
  },

{
    title: "Hospital Einstein",
    desc: "Site informacional sobre o Hospital Einstein.",
    tech: ["Wordpress", "Elementor", "PHP"],
    image: "/img/einstein.png",
    live: "https://www.einstein.br/n/",
  },

];

export default function WebsitesSection() {
  return (
    <section id="websites" className="bg-zinc-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-white">Websites</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((site, i) => (
            <div
              key={i}
              className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 flex flex-col"
            >
              {/* Imagem do Site (estilo Design) */}
              <div className="aspect-video overflow-hidden bg-zinc-800 border-b border-zinc-800">
                <img 
                  src={site.image} 
                  alt={site.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Conteúdo (estilo Dev) */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-bold text-xl mb-2 text-zinc-100">{site.title}</h4>
                <p className="text-zinc-400 text-sm mb-4 flex-1">{site.desc}</p>

                {/* Tags de Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {site.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] uppercase tracking-wider bg-zinc-800 px-2 py-1 rounded text-blue-400 font-medium border border-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Botão de Ação Único */}
                <a 
                  href={site.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center bg-blue-600 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  Visitar Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}