import { TrendingUp, Heart, Zap, Target, Book, Briefcase } from 'lucide-react';

const VocationalProfile = ({ testResult }) => {
    if (!testResult || !testResult.answers) {
        return (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
                <p className="text-slate-400">No hay datos de perfil disponibles. Completa el test vocacional para ver tu perfil.</p>
            </div>
        );
    }

    const { answers } = testResult;

    // Extract profile dimensions from answers
    const getInterest = () => {
        const interestMap = {
            'Tecnología y programación': { icon: <Zap />, color: 'text-blue-400', bg: 'bg-blue-500/10', label: 'Tecnología' },
            'Arte y diseño': { icon: <Heart />, color: 'text-pink-400', bg: 'bg-pink-500/10', label: 'Arte y Diseño' },
            'Salud y medicina': { icon: <Heart />, color: 'text-red-400', bg: 'bg-red-500/10', label: 'Salud' },
            'Negocios y finanzas': { icon: <Briefcase />, color: 'text-green-400', bg: 'bg-green-500/10', label: 'Negocios' },
            'Ingeniería y construcción': { icon: <TrendingUp />, color: 'text-orange-400', bg: 'bg-orange-500/10', label: 'Ingeniería' },
            'Comunicación y medios': { icon: <Target />, color: 'text-purple-400', bg: 'bg-purple-500/10', label: 'Comunicación' },
            'Ciencias sociales': { icon: <Book />, color: 'text-indigo-400', bg: 'bg-indigo-500/10', label: 'Sociales' }
        };
        return interestMap[answers.q1] || interestMap['Tecnología y programación'];
    };

    const getSkill = () => answers.q2 || 'No definido';
    const getMotivation = () => answers.q5 || 'No definido';
    const getLearningStyle = () => answers.q4 || 'No definido';
    const getPersonality = () => answers.q7 || 'No definido';

    const interest = getInterest();

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    📊 Tu Perfil Vocacional
                </h3>
                <p className="text-slate-400 text-sm mt-1">Basado en tus respuestas del test</p>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Interest */}
                <div className={`${interest.bg} border border-slate-800 rounded-lg p-4`}>
                    <div className="flex items-center gap-3 mb-2">
                        <div className={`${interest.color} text-2xl`}>
                            {interest.icon}
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Área de Interés</p>
                            <p className={`font-semibold ${interest.color}`}>{interest.label}</p>
                        </div>
                    </div>
                </div>

                {/* Skill */}
                <div className="bg-indigo-500/10 border border-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="text-indigo-400 text-2xl">
                            <Zap />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Habilidad Principal</p>
                            <p className="font-semibold text-indigo-400">{getSkill()}</p>
                        </div>
                    </div>
                </div>

                {/* Motivation */}
                <div className="bg-yellow-500/10 border border-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="text-yellow-400 text-2xl">
                            <Target />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Motivación</p>
                            <p className="font-semibold text-yellow-400">{getMotivation()}</p>
                        </div>
                    </div>
                </div>

                {/* Learning Style */}
                <div className="bg-green-500/10 border border-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="text-green-400 text-2xl">
                            <Book />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Estilo de Aprendizaje</p>
                            <p className="font-semibold text-green-400">{getLearningStyle()}</p>
                        </div>
                    </div>
                </div>

                {/* Personality */}
                <div className="bg-purple-500/10 border border-slate-800 rounded-lg p-4 md:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="text-purple-400 text-2xl">
                            <Heart />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Personalidad</p>
                            <p className="font-semibold text-purple-400">{getPersonality()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VocationalProfile;
