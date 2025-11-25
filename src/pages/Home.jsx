import { ArrowRight, Sparkles, TrendingUp, Users, Brain, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Split Layout */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
                </div>

                <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary font-medium mb-8">
                            <Sparkles className="h-4 w-4" />
                            <span>IA + Datos Reales de Mercado</span>
                        </div>

                        <h1 className="heading-xl text-white mb-6">
                            Tu futuro profesional, <br />
                            <span className="text-gradient">decidido con datos.</span>
                        </h1>

                        <p className="text-body mb-10 max-w-lg">
                            VocAI analiza tu perfil y el mercado laboral peruano para recomendarte carreras con futuro. Sin dudas, sin presiones.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/test" className="btn btn-primary">
                                Empezar Test Gratis <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <a href="#features" className="btn btn-outline">
                                Ver cómo funciona
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs">
                                        User
                                    </div>
                                ))}
                            </div>
                            <p>+2,000 estudiantes ya encontraron su carrera.</p>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative lg:h-[600px] w-full flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Abstract UI Representation */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl border border-white/5 shadow-2xl p-6 flex flex-col gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="h-8 w-1/3 bg-slate-700 rounded-md animate-pulse"></div>
                                <div className="flex gap-4">
                                    <div className="h-32 w-full bg-slate-700/50 rounded-xl"></div>
                                    <div className="h-32 w-full bg-primary/20 rounded-xl border border-primary/30 flex items-center justify-center">
                                        <Brain className="h-10 w-10 text-primary" />
                                    </div>
                                </div>
                                <div className="h-4 w-2/3 bg-slate-700/50 rounded-md"></div>
                                <div className="h-4 w-1/2 bg-slate-700/50 rounded-md"></div>

                                <div className="mt-auto p-4 bg-slate-800 rounded-xl border border-white/5 flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <TrendingUp className="h-5 w-5 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white font-medium">Alta Empleabilidad</div>
                                        <div className="text-xs text-gray-400">Ingeniería de Software</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Bento Grid */}
            <section id="features" className="py-24 bg-slate-900/30 border-y border-white/5">
                <div className="container">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="heading-lg text-white mb-4">Todo lo que necesitas para decidir</h2>
                        <p className="text-body">
                            Integramos tecnología y datos oficiales para darte la orientación más completa del Perú.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Large Card */}
                        <div className="md:col-span-2 card bg-gradient-to-br from-slate-800 to-slate-900 border-primary/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Brain className="h-64 w-64" />
                            </div>
                            <div className="relative z-10">
                                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Motor de IA Personalizado</h3>
                                <p className="text-gray-400 max-w-md">
                                    Nuestro algoritmo analiza tus intereses, habilidades y valores para encontrar patrones que los tests tradicionales ignoran. Aprende de ti mientras navegas.
                                </p>
                            </div>
                        </div>

                        {/* Tall Card */}
                        <div className="card bg-slate-800/50 group hover:bg-slate-800 transition-colors">
                            <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                                <TrendingUp className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Datos Reales</h3>
                            <p className="text-gray-400">
                                Conectamos con MINEDU y Ponte en Carrera. Verás sueldos reales y demanda laboral actual.
                            </p>
                        </div>

                        {/* Standard Card */}
                        <div className="card bg-slate-800/50 group hover:bg-slate-800 transition-colors">
                            <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                                <Users className="h-6 w-6 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Asistente 24/7</h3>
                            <p className="text-gray-400">
                                Resuelve dudas sobre mallas curriculares y universidades al instante con nuestro chatbot.
                            </p>
                        </div>

                        {/* Wide Card */}
                        <div className="md:col-span-2 card bg-slate-800/50 group hover:bg-slate-800 transition-colors flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
                                    <ShieldCheck className="h-6 w-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Sin Sesgos</h3>
                                <p className="text-gray-400">
                                    Recomendaciones objetivas basadas en compatibilidad y datos, no en publicidad de universidades.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 bg-slate-900 rounded-lg p-4 border border-white/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                    <div className="text-xs text-gray-400">Compatibilidad</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[90%] bg-green-400"></div>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[75%] bg-green-400/50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
