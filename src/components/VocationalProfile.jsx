import { TrendingUp, Heart, Zap, Target, Book, User, Sparkles, Star, Award } from 'lucide-react';

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
            'Tecnología y programación': { icon: <Zap />, color: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-500/50', gradient: 'from-cyan-500/20 via-blue-600/20 to-purple-600/20', label: 'Tecnología' },
            'Arte y diseño': { icon: <Heart />, color: 'text-pink-400', bg: 'bg-pink-500/20', border: 'border-pink-500/50', gradient: 'from-pink-500/20 via-rose-600/20 to-orange-600/20', label: 'Arte y Diseño' },
            'Salud y medicina': { icon: <Heart />, color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/50', gradient: 'from-red-500/20 via-red-600/20 to-orange-600/20', label: 'Salud' },
            'Negocios y finanzas': { icon: <TrendingUp />, color: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/50', gradient: 'from-emerald-500/20 via-green-600/20 to-teal-600/20', label: 'Negocios' },
            'Ingeniería y construcción': { icon: <TrendingUp />, color: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/50', gradient: 'from-orange-500/20 via-amber-600/20 to-yellow-600/20', label: 'Ingeniería' },
            'Comunicación y medios': { icon: <Target />, color: 'text-violet-400', bg: 'bg-violet-500/20', border: 'border-violet-500/50', gradient: 'from-violet-500/20 via-purple-600/20 to-fuchsia-600/20', label: 'Comunicación' },
            'Ciencias sociales': { icon: <Book />, color: 'text-indigo-400', bg: 'bg-indigo-500/20', border: 'border-indigo-500/50', gradient: 'from-indigo-500/20 via-blue-600/20 to-cyan-600/20', label: 'Sociales' }
        };
        return interestMap[answers.q1] || interestMap['Tecnología y programación'];
    };

    const interest = getInterest();

    const stats = [
        {
            label: 'Habilidad Principal',
            value: answers.q2 || 'No definido',
            icon: <Star className="w-4 h-4" />,
            color: 'text-yellow-400',
            bg: 'bg-yellow-400/10',
            border: 'border-yellow-400/30'
        },
        {
            label: 'Motivación',
            value: answers.q5 || 'No definido',
            icon: <Target className="w-4 h-4" />,
            color: 'text-red-400',
            bg: 'bg-red-400/10',
            border: 'border-red-400/30'
        },
        {
            label: 'Estilo de Aprendizaje',
            value: answers.q4 || 'No definido',
            icon: <Book className="w-4 h-4" />,
            color: 'text-blue-400',
            bg: 'bg-blue-400/10',
            border: 'border-blue-400/30'
        },
        {
            label: 'Personalidad',
            value: answers.q7 || 'No definido',
            icon: <User className="w-4 h-4" />,
            color: 'text-purple-400',
            bg: 'bg-purple-400/10',
            border: 'border-purple-400/30'
        }
    ];

    return (
        <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-900 shadow-2xl">
            {/* Main Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-20 pointer-events-none`} />

            <div className="relative p-6 md:p-8">
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${interest.bg} ${interest.border} border-2 flex items-center justify-center shadow-lg shadow-black/50`}>
                        <div className={`${interest.color} transform scale-125`}>
                            {interest.icon}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">Tu Perfil Vocacional</h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className={`text-sm font-semibold ${interest.color} uppercase tracking-wider`}>
                                {interest.label}
                            </span>
                            <span className="text-slate-500 text-sm">•</span>
                            <span className="text-slate-400 text-sm">Basado en 10 respuestas</span>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Card - Identity */}
                    <div className={`lg:col-span-1 relative overflow-hidden rounded-xl border-2 ${interest.border} bg-slate-800/50 p-6 flex flex-col justify-center items-center text-center group transition-all hover:bg-slate-800/80`}>
                        <div className={`absolute inset-0 bg-gradient-to-b ${interest.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />

                        <div className="relative z-10">
                            <div className="mb-4 inline-flex p-4 rounded-full bg-slate-900/50 border border-slate-700 shadow-xl">
                                <Award className={`w-12 h-12 ${interest.color}`} />
                            </div>
                            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Arquetipo Principal</h3>
                            <p className="text-2xl font-bold text-white mb-2">{interest.label}</p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Tu perfil destaca por un fuerte interés en {interest.label.toLowerCase()},
                                mostrando afinidad por {answers.q2 ? answers.q2.toLowerCase() : 'tus habilidades'}.
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className={`relative overflow-hidden rounded-xl border ${stat.border} ${stat.bg} p-4 flex items-start gap-4 transition-transform hover:scale-[1.02]`}>
                                <div className={`mt-1 p-2 rounded-lg bg-slate-900/50 border border-slate-700 ${stat.color}`}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                        {stat.label}
                                    </h4>
                                    <p className="text-white font-semibold text-base leading-tight">
                                        {stat.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VocationalProfile;
