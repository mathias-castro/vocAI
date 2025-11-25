import { Lightbulb, AlertCircle, Target, BookOpen } from 'lucide-react';

const PersonalizedAdvice = ({ testResult, topCareerData }) => {
    if (!testResult || !testResult.answers) {
        return null;
    }

    const { answers } = testResult;
    const advice = [];

    // Generate personalized advice based on answers

    // Based on personality
    if (answers.q7 === 'Introvertido y analítico') {
        advice.push({
            type: 'strength',
            icon: <Lightbulb />,
            text: 'Tu perfil introvertido y analítico es ideal para carreras que requieren concentración profunda y resolución de problemas complejos. Aprovecha esta fortaleza.'
        });
    } else if (answers.q7 === 'Extrovertido y social') {
        advice.push({
            type: 'strength',
            icon: <Lightbulb />,
            text: 'Tu personalidad extrovertida te abre puertas en carreras que requieren networking, trabajo en equipo y comunicación constante.'
        });
    } else if (answers.q7 === 'Empático y comprensivo') {
        advice.push({
            type: 'strength',
            icon: <Lightbulb />,
            text: 'Tu empatía es un superpoder en carreras orientadas al servicio y cuidado de personas. Esta habilidad es muy valorada.'
        });
    }

    // Based on motivation vs reality
    if (answers.q5 === 'Alto salario' && topCareerData) {
        const salary = topCareerData.salary || '';
        if (salary.includes('2,500') || salary.includes('3,000')) {
            advice.push({
                type: 'alert',
                icon: <AlertCircle />,
                text: 'Ten en cuenta que los salarios iniciales pueden ser moderados. El crecimiento profesional y la especialización incrementarán tus ingresos con el tiempo.'
            });
        }
    }

    // Based on learning style
    if (answers.q4 === 'Práctica y experimentación') {
        advice.push({
            type: 'tip',
            icon: <Target />,
            text: 'Busca universidades que ofrezcan laboratorios modernos y oportunidades de prácticas desde los primeros ciclos para aprovechar tu estilo de aprendizaje.'
        });
    } else if (answers.q4 === 'Teoría y lectura') {
        advice.push({
            type: 'tip',
            icon: <BookOpen />,
            text: 'Complementa tu formación teórica con prácticas profesionales y proyectos reales para tener un perfil más competitivo.'
        });
    }

    // Work style advice
    if (answers.q8 === 'Trabajo independiente' && answers.q1?.includes('Negocios')) {
        advice.push({
            type: 'development',
            icon: <Target />,
            text: 'Aunque prefieres el trabajo independiente, desarrolla habilidades de liderazgo y trabajo en equipo. Son esenciales en el mundo empresarial.'
        });
    }

    // Default motivational advice
    if (advice.length < 3) {
        advice.push({
            type: 'strength',
            icon: <Lightbulb />,
            text: 'Has demostrado claridad en tus preferencias vocacionales. Mantén esa coherencia mientras exploras las opciones que te presentamos.'
        });
    }

    const getStyleClasses = (type) => {
        switch (type) {
            case 'strength':
                return 'bg-green-500/10 border-green-500/20 text-green-400';
            case 'alert':
                return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400';
            case 'tip':
                return 'bg-blue-500/10 border-blue-500/20 text-blue-400';
            case 'development':
                return 'bg-purple-500/10 border-purple-500/20 text-purple-400';
            default:
                return 'bg-slate-500/10 border-slate-500/20 text-slate-400';
        }
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    💡 Consejos Personalizados
                </h3>
                <p className="text-slate-400 text-sm mt-1">Recomendaciones basadas en tu perfil</p>
            </div>

            <div className="p-6 space-y-4">
                {advice.map((item, idx) => (
                    <div key={idx} className={`border rounded-lg p-4 flex gap-3 ${getStyleClasses(item.type)}`}>
                        <div className="mt-0.5 flex-shrink-0">
                            {item.icon}
                        </div>
                        <p className="text-sm leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalizedAdvice;
