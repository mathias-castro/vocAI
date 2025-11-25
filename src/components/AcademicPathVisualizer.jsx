import { CheckCircle, Clock, GraduationCap, Briefcase, Award, Target, BookOpen, Sparkles } from 'lucide-react';

const AcademicPathVisualizer = ({ career, testResult }) => {
    if (!career) return null;

    // Extract key info from test
    const learningStyle = testResult?.answers?.q4 || 'No definido';
    const motivation = testResult?.answers?.q5 || 'No definido';

    // Generate personalized path steps
    const pathSteps = [
        {
            phase: 'Preparación',
            duration: '3-6 meses',
            icon: <Target />,
            color: 'blue',
            gradient: 'from-blue-500/20 via-blue-500/10 to-transparent',
            steps: [
                'Investigar a fondo sobre ' + career.title,
                learningStyle === 'Teoría y lectura'
                    ? 'Leer textos introductorios y artículos sobre el campo'
                    : 'Realizar cursos prácticos online relacionados',
                'Prepararse para el examen de admisión',
                'Visitar las universidades de tu interés'
            ]
        },
        {
            phase: 'Primeros Ciclos',
            duration: 'Ciclos 1-2',
            icon: <GraduationCap />,
            color: 'green',
            gradient: 'from-green-500/20 via-green-500/10 to-transparent',
            steps: [
                'Cursos de formación general y básicos',
                'Adaptación a la vida universitaria',
                'Formar grupos de estudio',
                'Explorar clubes y actividades extracurriculares'
            ]
        },
        {
            phase: 'Ciclos Intermedios',
            duration: 'Ciclos 3-6',
            icon: <BookOpen />,
            color: 'purple',
            gradient: 'from-purple-500/20 via-purple-500/10 to-transparent',
            steps: [
                'Cursos especializados de ' + career.title,
                'Buscar prácticas pre-profesionales',
                'Asistir a conferencias y eventos del sector',
                'Considerar intercambios académicos'
            ]
        },
        {
            phase: 'Últimos Ciclos',
            duration: 'Ciclos 7-10',
            icon: <Briefcase />,
            color: 'orange',
            gradient: 'from-orange-500/20 via-orange-500/10 to-transparent',
            steps: [
                'Tesis o proyecto final',
                'Prácticas profesionales avanzadas',
                'Networking con profesionales del sector',
                'Preparación para el mercado laboral'
            ]
        },
        {
            phase: 'Especialización',
            duration: 'Post-grado',
            icon: <Award />,
            color: 'yellow',
            gradient: 'from-yellow-500/20 via-yellow-500/10 to-transparent',
            steps: [
                motivation === 'Alto salario' || motivation === 'Reconocimiento e impacto'
                    ? 'Considerar maestría para mayor prestigio'
                    : 'Evaluar especializaciones según interés',
                'Certificaciones profesionales relevantes',
                'Educación continua y actualización'
            ]
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: { text: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/40', glow: 'shadow-blue-500/30' },
            green: { text: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/40', glow: 'shadow-green-500/30' },
            purple: { text: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/40', glow: 'shadow-purple-500/30' },
            orange: { text: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/40', glow: 'shadow-orange-500/30' },
            yellow: { text: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/40', glow: 'shadow-yellow-500/30' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-white/40 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 p-6 border-b-2 border-white/30">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                        <span className="text-2xl">🗺️</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Tu Ruta Académica Sugerida</h3>
                        <p className="text-slate-400 text-sm mt-0.5">
                            Plan personalizado para <span className="text-primary font-semibold">{career.title}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Content - Timeline */}
            <div className="p-6">
                <div className="space-y-6">
                    {pathSteps.map((step, idx) => {
                        const colorClasses = getColorClasses(step.color);
                        return (
                            <div key={idx} className="relative">
                                {/* Connector Line */}
                                {idx < pathSteps.length - 1 && (
                                    <div className="absolute left-7 top-20 w-0.5 h-full bg-gradient-to-b from-slate-600 to-transparent"></div>
                                )}

                                {/* Step Card */}
                                <div className="relative flex gap-5">
                                    {/* Icon with number badge */}
                                    <div className="relative flex-shrink-0">
                                        <div className={`w-16 h-16 rounded-2xl ${colorClasses.bg} border-2 ${colorClasses.border} flex items-center justify-center relative z-10 shadow-lg ${colorClasses.glow} transition-transform duration-300 hover:scale-110`}>
                                            <div className={`${colorClasses.text} text-2xl`}>
                                                {step.icon}
                                            </div>
                                        </div>
                                        {/* Number badge */}
                                        <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${colorClasses.bg} border-2 ${colorClasses.border} flex items-center justify-center z-20 shadow-md`}>
                                            <span className={`text-sm font-bold ${colorClasses.text}`}>{idx + 1}</span>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`flex-1 bg-gradient-to-br ${step.gradient} border-2 border-white/20 rounded-2xl p-5 transition-all duration-300 hover:border-white/30 hover:shadow-xl group`}>
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-xl font-bold text-white">
                                                {step.phase}
                                            </h4>
                                            <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 px-3 py-1.5 rounded-lg border border-white/10">
                                                <Clock className="h-4 w-4" />
                                                <span className="font-medium">{step.duration}</span>
                                            </div>
                                        </div>

                                        {/* Steps list */}
                                        <ul className="space-y-3">
                                            {step.steps.map((substep, subIdx) => (
                                                <li key={subIdx} className="flex items-start gap-3 group/item">
                                                    <div className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full ${colorClasses.bg} border-2 ${colorClasses.border} flex items-center justify-center transition-transform group-hover/item:scale-110`}>
                                                        <CheckCircle className={`h-4 w-4 ${colorClasses.text}`} />
                                                    </div>
                                                    <span className="text-sm text-slate-300 leading-relaxed group-hover/item:text-white transition-colors flex-1">
                                                        {substep}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Timeline Summary */}
                <div className="mt-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                            <Sparkles className="h-7 w-7 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                                Duración Total del Programa
                            </h4>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                <span className="text-primary font-bold">{career.duration}</span> de carrera + especialización opcional (aprox. 2 años).
                                El camino es progresivo, cada fase construye sobre el conocimiento anterior y te prepara para la siguiente etapa de tu desarrollo profesional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicPathVisualizer;
