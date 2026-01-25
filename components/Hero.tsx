export default function Hero() {
return (
<section className="min-h-screen flex items-center justify-center text-center px-6">
<div>
<h2 className="text-5xl font-bold mb-4">Desenvolvedor, Logo Maker, Designer, Tradutor</h2>
<p className="text-zinc-400 max-w-xl mx-auto mb-8">
Crio aplicações usando tecnologias modernas, otimizo sites, traduzo textos, crio logos e Banners, crio roteiros para vídeos, dentre outras funções.</p>
<div className="flex gap-4 justify-center">
<a href="#contact" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Contato</a>
<a href="#projects" className="border border-zinc-700 px-6 py-3 rounded-lg hover:bg-zinc-900">Ver Projetos</a>
</div>
</div>
</section>
);
}