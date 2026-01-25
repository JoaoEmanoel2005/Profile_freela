export default function Header() {
return (
<header className="fixed w-full bg-zinc-900/80 backdrop-blur border-b border-zinc-800 z-50">
<nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="font-bold text-xl">João | Freelancer</h1>
<div className="space-x-6 text-sm">
<a href="#projects" className="hover:text-blue-500">Projetos</a>
<a href="#contact" className="hover:text-blue-500">Contato</a>
</div>
</nav>
</header>
);
}