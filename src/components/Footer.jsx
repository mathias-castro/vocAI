import { Brain, Heart, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <Brain className="h-8 w-8 text-indigo-500" />
                            <span className="text-xl font-bold text-white">VocAI</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empoderando el futuro de los jóvenes peruanos a través de orientación vocacional impulsada por inteligencia artificial.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Plataforma</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Test Vocacional</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Carreras</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Universidades</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Precios</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Recursos</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Guía de Carreras</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Ayuda</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Términos</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} VocAI. Hecho con <Heart className="h-3 w-3 inline text-red-500 mx-1" /> en Perú.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
