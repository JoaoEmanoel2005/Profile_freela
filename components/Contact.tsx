export default function Contact() {
return (
<section id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
<h3 className="text-3xl font-bold mb-6">Vamos trabalhar juntos?</h3>
<p className="text-zinc-400 mb-10">Entre em contato comigo</p>


<div className="flex flex-wrap justify-center gap-4">
<a href="https://wa.me/5599999999999" target="_blank" className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700">WhatsApp</a>
<a href="mailto:seuemail@gmail.com" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Email</a>
<a href="https://github.com/seugithub" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-lg hover:bg-zinc-900">GitHub</a>
<a href="https://linkedin.com/in/seulinkedin" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-lg hover:bg-zinc-900">LinkedIn</a>
</div>
</section>
);
}