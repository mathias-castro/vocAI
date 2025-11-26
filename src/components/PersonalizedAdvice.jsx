import { Lightbulb, AlertCircle, Target, BookOpen, TrendingUp, Heart, Zap, Users, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const PersonalizedAdvice = ({ testResult, topCareerData }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!testResult || !testResult.answers) {
        return null;
    }

    const { answers } = testResult;
    const advice = [];

    // === ANÁLISIS BASADO EN ÁREA DE INTERÉS (Q1) ===
    const interest = answers.q1;
    if (interest === 'Tecnología y programación') {
        advice.push({
            type: 'strength',
            icon: <Zap />,
            text: `Tu pasión por la tecnología te coloca en un sector con alta demanda. Mantente actualizado con las últimas tendencias como IA, Cloud Computing y Ciberseguridad para maximizar tu competitividad.`
        });
        advice.push({
            type: 'tip',
            icon: <Target />,
            text: 'Considera crear un portafolio en GitHub desde ahora. Los empleadores valoran mucho ver proyectos reales y contribuciones a open source.'
        });
    } else if (interest === 'Arte y diseño') {
        advice.push({
            type: 'strength',
            icon: <Heart />,
            text: 'Tu creatividad es tu mayor activo. El diseño requiere tanto talento artístico como visión de negocios. Desarrolla ambos aspectos para destacar.'
        });
        advice.push({
            type: 'tip',
            icon: <Target />,
            text: 'Construye un portafolio digital desde el inicio de tu carrera. Plataformas como Behance o Dribbble son esenciales para mostrar tu trabajo.'
        });
    } else if (interest === 'Salud y medicina') {
        advice.push({
            type: 'strength',
            icon: <Heart />,
            text: 'El sector salud siempre tendrá alta demanda. Tu vocación de servicio es admirable y muy necesaria en nuestra sociedad.'
        });
        advice.push({
            type: 'alert',
            icon: <AlertCircle />,
            text: 'Las carreras de salud requieren mucha dedicación y años de estudio. Prepárate mentalmente para una formación exigente pero muy gratificante.'
        });
    } else if (interest === 'Negocios y finanzas') {
        advice.push({
            type: 'strength',
            icon: <TrendingUp />,
            text: 'El mundo empresarial valora tanto el conocimiento técnico como las habilidades blandas. Tu interés en negocios te abre un campo amplio de oportunidades.'
        });
        advice.push({
            type: 'development',
            icon: <Users />,
            text: 'Desarrolla tu red de contactos desde la universidad. El networking es crucial en el mundo de los negocios y puede abrir puertas que el conocimiento solo no puede.'
        });
    } else if (interest === 'Comunicación y medios') {
        advice.push({
            type: 'strength',
            icon: <Lightbulb />,
            text: 'La comunicación efectiva es una de las habilidades más valoradas del siglo XXI. Tu elección te posiciona en industrias dinámicas y en constante evolución.'
        });
        advice.push({
            type: 'tip',
            icon: <Target />,
            text: 'Crea contenido activamente en redes sociales y blogs para practicar. Tu presencia digital será tu carta de presentación en este campo.'
        });
    }

    // === ANÁLISIS BASADO EN HABILIDAD PRINCIPAL (Q2) ===
    const skill = answers.q2;
    if (skill === 'Resolver problemas lógicos') {
        advice.push({
            type: 'strength',
            icon: <Zap />,
            text: 'Tu capacidad analítica es excepcional. Esta habilidad es fundamental en carreras STEM y te dará ventaja en resolución de problemas complejos.'
        });
    } else if (skill === 'Crear y diseñar') {
        advice.push({
            type: 'tip',
            icon: <Lightbulb />,
            text: 'Complementa tu creatividad con habilidades técnicas. El dominio de herramientas digitales (Adobe Suite, Figma, etc.) es indispensable en el mercado actual.'
        });
    } else if (skill === 'Ayudar a otros') {
        advice.push({
            type: 'strength',
            icon: <Heart />,
            text: 'Tu vocación de servicio es admirable. Considera también desarrollar habilidades de gestión para poder ayudar a más personas a mayor escala.'
        });
    } else if (skill === 'Liderar y gestionar') {
        advice.push({
            type: 'development',
            icon: <Users />,
            text: 'Busca oportunidades de liderazgo desde ahora: clubes universitarios, proyectos grupales, voluntariados. La experiencia práctica vale más que la teoría en liderazgo.'
        });
    }

    // === ANÁLISIS BASADO EN ESTILO DE APRENDIZAJE (Q4) ===
    const learningStyle = answers.q4;
    if (learningStyle === 'Práctica y experimentación') {
        advice.push({
            type: 'tip',
            icon: <Target />,
            text: 'Busca universidades que ofrezcan laboratorios modernos, proyectos aplicados y convenios de prácticas desde los primeros ciclos. Tu aprendizaje será mucho más efectivo.'
        });
    } else if (learningStyle === 'Teoría y lectura') {
        advice.push({
            type: 'alert',
            icon: <AlertCircle />,
            text: 'Aunque domines la teoría, complementa siempre con práctica. El mercado laboral valora la experiencia práctica tanto o más que el conocimiento teórico.'
        });
    } else if (learningStyle === 'Proyectos en equipo') {
        advice.push({
            type: 'strength',
            icon: <Users />,
            text: 'Tu capacidad para trabajar en equipo es muy valiosa. Las empresas buscan profesionales que puedan colaborar efectivamente en entornos multidisciplinarios.'
        });
    } else if (learningStyle === 'Estudio individual') {
        advice.push({
            type: 'development',
            icon: <Users />,
            text: 'Aunque prefieras estudiar solo, practica el trabajo en equipo. La mayoría de proyectos profesionales requieren colaboración con diversas áreas.'
        });
    }

    // === ANÁLISIS BASADO EN MOTIVACIÓN (Q5) ===
    const motivation = answers.q5;
    if (motivation === 'Alto salario' && topCareerData) {
        const salary = topCareerData.salary || '';
        if (salary.includes('2,500') || salary.includes('3,000') || salary.includes('3,500')) {
            advice.push({
                type: 'alert',
                icon: <AlertCircle />,
                text: `Importante: Los salarios iniciales en ${topCareerData.title} pueden ser moderados (${salary}). El crecimiento salarial dependerá de tu especialización, experiencia y capacidad de negociación.`
            });
        } else {
            advice.push({
                type: 'strength',
                icon: <TrendingUp />,
                text: `Buena noticia: ${topCareerData.title} ofrece salarios competitivos (${salary}). Con especialización y experiencia, podrás alcanzar ingresos muy atractivos.`
            });
        }
    } else if (motivation === 'Creatividad y expresión') {
        advice.push({
            type: 'strength',
            icon: <Lightbulb />,
            text: 'Tu motivación por la creatividad te llevará a desarrollar soluciones innovadoras. No pierdas nunca esa chispa, incluso cuando enfrentes rutinas laborales.'
        });
    } else if (motivation === 'Reconocimiento e impacto') {
        advice.push({
            type: 'tip',
            icon: <Target />,
            text: 'Para lograr reconocimiento, documenta tus logros, publica tu trabajo y participa en comunidades profesionales. La visibilidad es clave para el impacto.'
        });
    } else if (motivation === 'Estabilidad laboral') {
        advice.push({
            type: 'strength',
            icon: <BookOpen />,
            text: 'Tu búsqueda de estabilidad es sabia. Complementa tu formación con certificaciones y actualización constante para mantener tu empleabilidad a largo plazo.'
        });
    }

    // === ANÁLISIS BASADO EN PERSONALIDAD (Q7) ===
    const personality = answers.q7;
    if (personality === 'Introvertido y analítico') {
        advice.push({
            type: 'strength',
            icon: <Zap />,
            text: 'Tu perfil introvertido y analítico es ideal para carreras que requieren concentración profunda, análisis de datos y resolución de problemas complejos.'
        });
        advice.push({
            type: 'development',
            icon: <Users />,
            text: 'Desarrolla habilidades de comunicación y presentación. Incluso en roles técnicos, necesitarás explicar tus ideas a no especialistas.'
        });
    } else if (personality === 'Extrovertido y social') {
        advice.push({
            type: 'strength',
            icon: <Users />,
            text: 'Tu carisma y habilidades sociales te abren puertas en roles de liderazgo, ventas, gestión de equipos y cualquier posición que requiera networking constante.'
        });
    } else if (personality === 'Empático y comprensivo') {
        advice.push({
            type: 'strength',
            icon: <Heart />,
            text: 'Tu empatía es un superpoder en carreras de salud, educación, recursos humanos y servicio al cliente. Esta soft skill es muy valorada y difícil de enseñar.'
        });
    } else if (personality === 'Innovador y arriesgado') {
        advice.push({
            type: 'strength',
            icon: <Lightbulb />,
            text: 'Tu espíritu innovador es perfecto para emprendimiento, startups, áreas de I+D y roles que requieran pensamiento disruptivo. ¡No temas proponer ideas diferentes!'
        });
        advice.push({
            type: 'alert',
            icon: <AlertCircle />,
            text: 'Balancea tu espíritu innovador con pragmatismo. Las mejores ideas son aquellas que pueden ejecutarse en la práctica.'
        });
    }

    // === ANÁLISIS BASADO EN TIPO DE DESAFÍO (Q9) ===
    const challenge = answers.q9;
    if (challenge === 'Problemas técnicos y datos') {
        advice.push({
            type: 'development',
            icon: <BookOpen />,
            text: 'Fortalece tus habilidades en análisis de datos, programación y estadística. Herramientas como Python, SQL y Excel avanzado serán tus aliadas.'
        });
    } else if (challenge === 'Desafíos creativos') {
        advice.push({
            type: 'tip',
            icon: <Lightbulb />,
            text: 'Mantén un portafolio actualizado de tus mejores trabajos creativos. Es tu mejor carta de presentación en entrevistas y proyectos freelance.'
        });
    }

    // === CONSEJOS GENERALES SIEMPRE ÚTILES ===
    advice.push({
        type: 'tip',
        icon: <Target />,
        text: 'Aprovecha las prácticas pre-profesionales al máximo. Muchas veces son la puerta de entrada a tu primer empleo formal. Trata cada práctica como una entrevista extendida.'
    });

    if (topCareerData && topCareerData.demand === 'Muy Alta') {
        advice.push({
            type: 'strength',
            icon: <TrendingUp />,
            text: `Excelente elección: ${topCareerData.title} tiene demanda laboral MUY ALTA. Esto se traduce en más oportunidades de empleo y mejor poder de negociación salarial.`
        });
    } else if (topCareerData && topCareerData.demand === 'Media') {
        advice.push({
            type: 'alert',
            icon: <AlertCircle />,
            text: `Ten en cuenta que ${topCareerData.title} tiene demanda Media. Destaca especializándote en áreas emergentes y construyendo una marca personal sólida.`
        });
    }

    const getStyleClasses = (type) => {
        switch (type) {
            case 'strength':
                return {
                    container: 'bg-emerald-500/10 border-l-4 border-emerald-500 hover:bg-emerald-500/20',
                    icon: 'text-emerald-400 bg-emerald-500/20',
                    text: 'text-slate-200'
                };
            case 'alert':
                return {
                    container: 'bg-amber-500/10 border-l-4 border-amber-500 hover:bg-amber-500/20',
                    icon: 'text-amber-400 bg-amber-500/20',
                    text: 'text-slate-200'
                };
            case 'tip':
                return {
                    container: 'bg-blue-500/10 border-l-4 border-blue-500 hover:bg-blue-500/20',
                    icon: 'text-blue-400 bg-blue-500/20',
                    text: 'text-slate-200'
                };
            case 'development':
                return {
                    container: 'bg-violet-500/10 border-l-4 border-violet-500 hover:bg-violet-500/20',
                    icon: 'text-violet-400 bg-violet-500/20',
                    text: 'text-slate-200'
                };
            default:
                return {
                    container: 'bg-slate-500/10 border-l-4 border-slate-500',
                    icon: 'text-slate-400 bg-slate-500/20',
                    text: 'text-slate-200'
                };
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'strength':
                return '✅ Fortaleza';
            case 'alert':
                return '⚠️ Considera';
            case 'tip':
                return '💡 Consejo';
            case 'development':
                return '🎯 Desarrolla';
            default:
                return '💬 Nota';
        }
    };

    return (
        <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-900 shadow-2xl transition-all duration-300">
            {/* Header Collapsible Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full relative z-10 flex items-center justify-between p-6 md:p-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 transition-all duration-300 group text-left cursor-pointer select-none shadow-lg"
            >
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <Lightbulb className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">Consejos Personalizados</h3>
                        <p className="text-white/90 text-sm mt-1 font-medium">Recomendaciones estratégicas para tu éxito</p>
                    </div>
                </div>
                <div className={`p-3 rounded-full bg-white/10 border border-white/20 transition-all duration-300 ${isOpen ? 'rotate-180 bg-white/20' : 'hover:bg-white/20'}`}>
                    <ChevronDown className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Collapsible Content - Conditional Rendering */}
            {isOpen && (
                <div className="p-6 md:p-8 pt-0 bg-slate-900/50 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {advice.map((item, idx) => {
                            const styles = getStyleClasses(item.type);
                            return (
                                <div
                                    key={idx}
                                    className={`${styles.container} rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                                >
                                    <div className="flex gap-4">
                                        {/* Icon */}
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${styles.icon} flex items-center justify-center`}>
                                            {item.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80 text-white">
                                                {getTypeLabel(item.type)}
                                            </div>
                                            <p className={`text-sm leading-relaxed ${styles.text}`}>
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonalizedAdvice;
