import { CheckCircle, Clock, GraduationCap, Briefcase, Award, Target, BookOpen, Sparkles, ChevronDown, Map } from 'lucide-react';
import { useState } from 'react';

const AcademicPathVisualizer = ({ career, testResult }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!career) return null;

    // Extract key info from test
    const learningStyle = testResult?.answers?.q4 || 'No definido';
    const motivation = testResult?.answers?.q5 || 'No definido';

    // Generate personalized path steps
    const pathSteps = [
        {
            phase: 'Preparación',
            duration: '3-6 meses',
            icon: <Target className="w-6 h-6" />,
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/20',
            border: 'border-cyan-500/50',
            gradient: 'from-cyan-500/20 to-transparent',
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
            icon: <GraduationCap className="w-6 h-6" />,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/20',
            border: 'border-emerald-500/50',
            gradient: 'from-emerald-500/20 to-transparent',
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
            icon: <BookOpen className="w-6 h-6" />,
            color: 'text-violet-400',
            bg: 'bg-violet-500/20',
            border: 'border-violet-500/50',
            gradient: 'from-violet-500/20 to-transparent',
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
            icon: <Briefcase className="w-6 h-6" />,
            color: 'text-orange-400',
            bg: 'bg-orange-500/20',
            border: 'border-orange-500/50',
            gradient: 'from-orange-500/20 to-transparent',
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
            icon: <Award className="w-6 h-6" />,
            color: 'text-pink-400',
            bg: 'bg-pink-500/20',
            border: 'border-pink-500/50',
            gradient: 'from-pink-500/20 to-transparent',
            steps: [
                motivation === 'Alto salario' || motivation === 'Reconocimiento e impacto'
                    ? 'Considerar maestría para mayor prestigio'
                    : 'Evaluar especializaciones según interés',
                'Certificaciones profesionales relevantes',
                'Educación continua y actualización'
            ]
        }
    ];

    return (
        <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-900 shadow-2xl transition-all duration-300">
            {/* Header Collapsible Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full relative z-10 flex items-center justify-between p-6 md:p-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 group text-left cursor-pointer select-none shadow-lg"
            >
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <Map className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">Tu Ruta Académica</h3>
                        <p className="text-white/90 text-sm mt-1 font-medium">
                            Plan maestro para <span className="text-white font-bold">{career.title}</span>
                        </p>
                    </div>
                </div>
                <div className={`p-3 rounded-full bg-white/10 border border-white/20 transition-all duration-300 ${isOpen ? 'rotate-180 bg-white/20' : 'hover:bg-white/20'}`}>
                    <ChevronDown className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Collapsible Content - Conditional Rendering */}
            {isOpen && (
                <div className="p-6 md:p-8 pt-0 bg-slate-900/50 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="relative space-y-8 mt-8 pl-4 md:pl-0">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500/50 via-slate-700 to-transparent hidden md:block"></div>

                        {pathSteps.map((step, idx) => (
                            <div key={idx} className="relative md:pl-24 group">
                                {/* Timeline Node (Desktop) */}
                                <div className={`hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl ${step.bg} border-2 ${step.border} items-center justify-center z-10 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                    <div className={step.color}>{step.icon}</div>
                                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border ${step.border} flex items-center justify-center`}>
                                        <span className={`text-xs font-bold ${step.color}`}>{idx + 1}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/40 p-6 transition-all duration-300 hover:bg-slate-800/60 hover:border-${step.color.split('-')[1]}-500/30 hover:shadow-lg`}>
                                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-10`} />

                                    {/* Mobile Header (Icon + Title) */}
                                    <div className="flex md:hidden items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center`}>
                                            <div className={step.color}>{step.icon}</div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">{step.phase}</h4>
                                            <span className={`text-xs font-bold ${step.color} px-2 py-0.5 rounded-full bg-slate-900/50 border border-slate-700`}>
                                                Paso {idx + 1}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Desktop Header */}
                                    <div className="hidden md:flex items-center justify-between mb-4 relative z-10">
                                        <h4 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                                            {step.phase}
                                        </h4>
                                        <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700">
                                            <Clock className="h-4 w-4" />
                                            <span className="font-medium">{step.duration}</span>
                                        </div>
                                    </div>

                                    {/* Steps List */}
                                    <ul className="space-y-3 relative z-10">
                                        {step.steps.map((substep, subIdx) => (
                                            <li key={subIdx} className="flex items-start gap-3">
                                                <div className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full ${step.bg} border ${step.border} flex items-center justify-center`}>
                                                    <CheckCircle className={`h-3 w-3 ${step.color}`} />
                                                </div>
                                                <span className="text-slate-300 text-sm leading-relaxed">
                                                    {substep}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Footer */}
                    <div className="mt-10 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-5 flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm mb-1">Resumen del Camino</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                <span className="text-indigo-400 font-semibold">{career.duration}</span> de carrera + especialización opcional.
                                Este plan está diseñado para maximizar tus fortalezas de aprendizaje ({learningStyle.toLowerCase()}) y alinearse con tu motivación principal.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AcademicPathVisualizer;
