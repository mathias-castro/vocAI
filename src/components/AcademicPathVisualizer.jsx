import { CheckCircle, Clock, GraduationCap, Briefcase, Award, Target, BookOpen } from 'lucide-react';

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
            steps: [
                'Tesis o proyecto final',
                'Prácticas profesionales avanzadas',
                'Networking con profesionales del sector',
                'Preparación para el mercado laboral'
            ]
        },
        {
            phase: 'Especialización',
            duration: 'Post-grado (Opcional)',
            icon: <Award />,
            color: 'yellow',
            steps: [
                motivation === 'Alto salario' || motivation === 'Reconocimiento e impacto'
                    ? 'Considerar maestría para mayor prestigio'
                    : 'Evaluar especializaciones según interés',
                'Certificaciones profesionales relevantes',
                'Educación continua y actualización',
                'Considerar doctorado si te interesa la investigación'
            ]
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
            green: 'bg-green-500/10 border-green-500/30 text-green-400',
            purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
            orange: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
            yellow: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    🗺️ Tu Ruta Académica Sugerida
                </h3>
                <p className="text-slate-400 text-sm mt-1">Plan personalizado para {career.title}</p>
            </div>

            <div className="p-6">
                {/* Timeline */}
                <div className="space-y-6">
                    {pathSteps.map((step, idx) => (
                        <div key={idx} className="relative">
                            {/* Connector Line */}
                            {idx < pathSteps.length - 1 && (
                                <div className="absolute left-6 top-12 w-0.5 h-full bg-slate-800"></div>
                            )}

                            {/* Step Card */}
                            <div className="flex gap-4">
                                {/* Icon */}
                                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${getColorClasses(step.color)} flex items-center justify-center border-2 relative z-10`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-8">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-lg font-bold text-white">{step.phase}</h4>
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <Clock className="h-4 w-4" />
                                            {step.duration}
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {step.steps.map((substep, subIdx) => (
                                            <li key={subIdx} className="flex items-start gap-3 text-sm">
                                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-slate-300">{substep}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline Summary */}
                <div className="mt-8 bg-slate-800/30 border border-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold text-white">Duración Total</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                        {career.duration} de carrera + especialización opcional. El camino es progresivo y cada fase te prepara para la siguiente.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AcademicPathVisualizer;
