import { TrendingUp, Heart, Zap, Target, Book, User, Sparkles } from 'lucide-react';

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
            'Tecnología y programación': { icon: <Zap />, color: 'text-blue-400', bg: 'bg-blue-500/20', gradient: 'from-blue-500/20 to-blue-500/5', label: 'Tecnología' },
            'Arte y diseño': { icon: <Heart />, color: 'text-pink-400', bg: 'bg-pink-500/20', gradient: 'from-pink-500/20 to-pink-500/5', label: 'Arte y Diseño' },
            'Salud y medicina': { icon: <Heart />, color: 'text-red-400', bg: 'bg-red-500/20', gradient: 'from-red-500/20 to-red-500/5', label: 'Salud' },
            'Negocios y finanzas': { icon: <TrendingUp />, color: 'text-green-400', bg: 'bg-green-500/20', gradient: 'from-green-500/20 to-green-500/5', label: 'Negocios' },
            'Ingeniería y construcción': { icon: <TrendingUp />, color: 'text-orange-400', bg: 'bg-orange-500/20', gradient: 'from-orange-500/20 to-orange-500/5', label: 'Ingeniería' },
            'Comunicación y medios': { icon: <Target />, color: 'text-purple-400', bg: 'bg-purple-500/20', gradient: 'from-purple-500/20 to-purple-500/5', label: 'Comunicación' },
            'Ciencias sociales': { icon: <Book />, color: 'text-indigo-400', bg: 'bg-indigo-500/20', gradient: 'from-indigo-500/20 to-indigo-500/5', label: 'Sociales' }
        };
        return interestMap[answers.q1] || interestMap['Tecnología y programación'];
    };

    const interest = getInterest();

    const profileData = [
        {
            category: 'Área de Interés',
            icon: interest.icon,
            color: interest.color,
            bg: interest.bg,
            gradient: interest.gradient,
            value: interest.label
        },
        {
            category: 'Habilidad Principal',
            icon: <Zap />,
            color: 'text-indigo-400',
            bg: 'bg-indigo-500/20',
            gradient: 'from-indigo-500/20 to-indigo-500/5',
            value: answers.q2 || 'No definido'
        },
        {
            category: 'Motivación',
            icon: <Target />,
            color: 'text-yellow-400',
            bg: 'bg-yellow-500/20',
            gradient: 'from-yellow-500/20 to-yellow-500/5',
            value: answers.q5 || 'No definido'
        },
        {
            category: 'Estilo de Aprendizaje',
            icon: <Book />,
            color: 'text-green-400',
            bg: 'bg-green-500/20',
            gradient: 'from-green-500/20 to-green-500/5',
            value: answers.q4 || 'No definido'
        },
        {
            category: 'Personalidad',
            icon: <User />,
            color: 'text-purple-400',
            bg: 'bg-purple-500/20',
            gradient: 'from-purple-500/20 to-purple-500/5',
            value: answers.q7 || 'No definido'
        }
    ];

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-white/40 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 p-6 border-b-2 border-white/30">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/30">
                        <span className="text-2xl">📊</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Tu Perfil Vocacional</h3>
                        <p className="text-slate-400 text-sm mt-0.5">Basado en tus respuestas del test</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {profileData.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gradient-to-br ${item.gradient} border-2 border-white/20 rounded-2xl p-5 transition-all duration-300 hover:border-white/40 hover:shadow-xl hover:scale-105 cursor-default`}
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-5 overflow-hidden rounded-tr-2xl">
                                <div className={`w-full h-full ${item.color} scale-150`}>
                                    {item.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative flex flex-col items-center text-center gap-3">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl ${item.bg} border-2 border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                                    <div className={`${item.color} text-xl`}>
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Label */}
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                    {item.category}
                                </div>

                                {/* Value */}
                                <div className={`font-bold text-base ${item.color} leading-tight`}>
                                    {item.value}
                                </div>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-2 border-white/20 rounded-xl p-4 flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-xs text-slate-400">
                        Este perfil se generó automáticamente a partir de tus <span className="text-primary font-semibold">10 respuestas</span> del test vocacional
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VocationalProfile;
