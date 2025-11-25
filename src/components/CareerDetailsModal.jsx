import { X, BookOpen, MapPin, CheckCircle, ExternalLink, Sparkles, GraduationCap, Calendar } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../context/ChatContext';

const CareerDetailsModal = ({ isOpen, onClose, career }) => {
    const [activeTab, setActiveTab] = useState('plan'); // 'plan' or 'universities'
    const { openChat } = useChat();
    const navigate = useNavigate();

    if (!isOpen || !career) return null;

    // Use the passed career data directly
    const data = career;

    const handleConsultAI = () => {
        openChat(`Hola VocAI, me interesa la carrera de ${data.title}. ¿Podrías contarme más sobre el campo laboral y el salario promedio en Perú?`);
        onClose();
        navigate('/chat');
    };

    // Map of university names to their official websites
    const universityWebsites = {
        'UPC': 'https://www.upc.edu.pe/',
        'UTEC': 'https://www.utec.edu.pe/',
        'PUCP': 'https://www.pucp.edu.pe/',
        'UPCH': 'https://www.upch.edu.pe/',
        'UNMSM': 'https://www.unmsm.edu.pe/',
        'USMP': 'https://www.usmp.edu.pe/',
        'Universidad de Lima': 'https://www.ulima.edu.pe/',
        'Universidad del Pacífico': 'https://www.up.edu.pe/',
        'UCAL': 'https://ucal.edu.pe/',
        'UNI': 'https://www.uni.edu.pe/',
        'UCSM': 'https://www.ucsm.edu.pe/',
        'Universidad Antonio Ruiz de Montoya': 'https://www.uarm.edu.pe/',
        'UNALM': 'https://www.lamolina.edu.pe/',
        'Universidad Científica del Sur': 'https://cientifica.edu.pe/',
        'Universidad San Ignacio de Loyola': 'https://www.usil.edu.pe/',
        'ESAN': 'https://www.esan.edu.pe/',
        'Le Cordon Bleu': 'https://www.lcbperu.edu.pe/',
        'D\'Gallia': 'https://www.dgallia.edu.pe/',
        'Cenfotur': 'https://www.cenfotur.edu.pe/',
        'Toulouse Lautrec': 'https://www.toulouselautrec.edu.pe/'
    };

    const getUniversityUrl = (name) => {
        return universityWebsites[name] || '#';
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()}>
                {/* Header with Gradient */}
                <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 p-8 border-b border-slate-700">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/10">
                            <GraduationCap className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h2 className="heading-md text-white mb-2">{data.title}</h2>
                            <p className="text-body text-sm max-w-2xl">{data.description}</p>
                        </div>
                        <button
                            onClick={handleConsultAI}
                            className="btn btn-primary flex items-center gap-2 shadow-lg shadow-primary/20 whitespace-nowrap"
                        >
                            <Sparkles className="h-4 w-4" />
                            Consultar con IA
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="px-8 pt-6 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-6">
                        <button
                            className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === 'plan' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
                            onClick={() => setActiveTab('plan')}
                        >
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                Plan de Estudios
                            </div>
                            {activeTab === 'plan' && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                            )}
                        </button>
                        <button
                            className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === 'universities' ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
                            onClick={() => setActiveTab('universities')}
                        >
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                Universidades Top
                            </div>
                            {activeTab === 'universities' && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                            )}
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="modal-body bg-slate-950 min-h-[400px]">
                    {activeTab === 'plan' ? (
                        <div className="grid gap-6">
                            {data.plan.map((level, idx) => (
                                <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                                    <div className="bg-slate-800/50 px-6 py-3 border-b border-slate-800 flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-primary" />
                                        <h3 className="font-semibold text-white text-sm">{level.ciclo}</h3>
                                    </div>
                                    <div className="p-6">
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {level.courses.map(course => (
                                                <li key={course} className="flex items-start gap-3 text-sm text-slate-300 bg-slate-950/50 p-3 rounded-lg border border-slate-800/50 hover:border-primary/30 transition-colors">
                                                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data.universities.map((uni, idx) => (
                                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors">{uni.name}</h3>
                                            <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded mt-2 inline-block">
                                                {uni.type}
                                            </span>
                                        </div>
                                        <div className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold border border-yellow-500/20">
                                            {uni.ranking}
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed border-l-2 border-slate-800 pl-3 italic">
                                        "{uni.highlight}"
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2 text-sm text-slate-400">
                                            <MapPin className="h-4 w-4" />
                                            {uni.location}
                                        </div>
                                        <a
                                            href={getUniversityUrl(uni.name)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                                        >
                                            Ver más <ExternalLink className="h-3 w-3" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-4 border-t border-slate-800 bg-slate-900 text-center">
                    <p className="text-xs text-slate-500">
                        * Información referencial basada en mallas curriculares actuales (2024-2025).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CareerDetailsModal;
