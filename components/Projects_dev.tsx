const projects_dev = [
  {
    title: "StudyConnect",
    desc: "Plataforma educacional com autenticação JWT e API REST.",
    tech: ["React.js", "Node.js", "MySQL"],
    live: "",
    repo: "https://github.com/JoaoEmanoel2005/StudyConnect"
  },
  
];

export default function ProjectsDev() {
  return (
    <section id="projects_dev" className="bg-zinc-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10">Projetos Dev</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {projects_dev.map((p, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-blue-600 transition flex flex-col justify-between"
            >
              <div>
                <h4 className="font-bold text-xl mb-2">{p.title}</h4>
                <p className="text-zinc-400 mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-blue-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {p.live && (
                  <a href={p.live} target="_blank" className="flex-1 text-center bg-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                    Ver Projeto
                  </a>
                )}

                <a href={p.repo} target="_blank" className="flex-1 text-center border border-zinc-700 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-900 transition">
                  Código Fonte
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
