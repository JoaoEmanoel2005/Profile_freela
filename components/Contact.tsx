export default function Contact() {
return (
<section id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
<h3 className="text-3xl font-bold mb-6">Vamos trabalhar juntos?</h3>
<p className="text-zinc-400 mb-10">Entre em contato comigo</p>


<div className="flex flex-wrap justify-center gap-4">
<a href="https://wa.me/5512992524075" target="_blank" className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700">WhatsApp</a>
<a href="mailto:jeas9999@gmail.com" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Email</a>
<a href="https://github.com/JoaoEmanoel2005" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-lg hover:bg-zinc-900">GitHub</a>
<a href="https://www.linkedin.com/in/jo%C3%A3o-emanoell-6b2b66268/" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-lg hover:bg-zinc-900">LinkedIn</a>
</div>
</section>
);
}