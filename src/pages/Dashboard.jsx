import { Briefcase, TrendingUp, DollarSign, BookOpen, MapPin, ArrowRight, Star, Download, RotateCcw, LogOut, MessageCircle, Award, GitCompare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import CareerDetailsModal from '../components/CareerDetailsModal';
import VocationalProfile from '../components/VocationalProfile';
import PersonalizedAdvice from '../components/PersonalizedAdvice';
import CareerComparator from '../components/CareerComparator';
import AcademicPathVisualizer from '../components/AcademicPathVisualizer';
import { careersData } from '../data/careers';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [showComparator, setShowComparator] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const { openChat } = useChat();

    // Get result data from navigation state or from saved results
    const navResultData = location.state?.resultData;
    const savedResult = user?.results?.[0]; // Most recent result

    // Use navigation data if available, otherwise use saved data
    const testResult = navResultData || savedResult;

    // Get top career and scores
    const topCareerId = testResult?.topCareer || testResult?.careerId || 'software-engineering';
    const careerScores = testResult?.scores || {};

    // Get top 5 careers sorted by score
    const topCareers = Object.entries(careerScores)
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
        .slice(0, 5)
        .map(([careerId, score]) => ({
            ...careersData[careerId],
            score
        }));

    // If no scores available, just show the top career
    const careerToShow = topCareers.length > 0 ? topCareers : [careersData[topCareerId]];
    const mainCareer = careersData[topCareerId];

    const handleOpenModal = (career) => {
        setSelectedCareer(career);
        setIsModalOpen(true);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="page-container dashboard-page">
            <CareerDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                career={selectedCareer}
            />

            {showComparator && (
                <CareerComparator
                    careers={careerToShow}
                    onClose={() => setShowComparator(false)}
                />
            )}

            <div className="container">
                {/* Header */}
                <div className="dashboard-header">
                    <div>
                        <h1 className="heading-lg text-white mb-2">Hola, {user ? user.name.split(' ')[0] : 'Invitado'} 👋</h1>
                        <p className="text-body">Tu análisis vocacional personalizado.</p>
                        {testResult?.date && (
                            <p className="text-xs text-slate-500 mt-1">Último test: {formatDate(testResult.date)}</p>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => navigate('/test')} className="btn btn-outline">
                            <RotateCcw className="mr-2 h-4 w-4" /> Repetir Test
                        </button>
                        <Link to="/chat" className="btn btn-secondary flex items-center">
                            <MessageCircle className="mr-2 h-4 w-4" /> Chat IA
                        </Link>
                        {user && (
                            <button onClick={handleLogout} className="btn btn-outline text-red-400 border-red-400/20 hover:bg-red-500/10 hover:border-red-400">
                                <LogOut className="mr-2 h-4 w-4" /> Salir
                            </button>
                        )}
                    </div>
                </div>

                {/* Vocational Profile */}
                {testResult && (
                    <div className="mb-8">
                        <VocationalProfile testResult={testResult} />
                    </div>
                )}

                {/* Top Compatible Careers */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="heading-md text-white mb-1">🎯 Carreras Más Compatibles</h2>
                            <p className="text-slate-400 text-sm">Basado en tu perfil vocacional</p>
                        </div>
                        {careerToShow.length > 1 && (
                            <button
                                onClick={() => setShowComparator(true)}
                                className="btn btn-outline flex items-center gap-2"
                            >
                                <GitCompare className="h-4 w-4" />
                                Comparar ({careerToShow.length})
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {careerToShow.map((career, index) => (
                            <div
                                key={career.id}
                                className={`career-card group ${index === 0 ? 'border-primary/50 bg-primary/5' : ''}`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            {index === 0 && (
                                                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                    <Award className="h-3 w-3" /> MEJOR MATCH
                                                </div>
                                            )}
                                            {career.score && (
                                                <div className="bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                    {career.score}% Compatible
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {career.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-4">{career.description}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div className="stat-item">
                                                <DollarSign className="h-5 w-5 text-green-400" />
                                                <div>
                                                    <p className="stat-label">Salario</p>
                                                    <p className="stat-value">{career.salary}</p>
                                                </div>
                                            </div>
                                            <div className="stat-item">
                                                <TrendingUp className="h-5 w-5 text-blue-400" />
                                                <div>
                                                    <p className="stat-label">Demanda</p>
                                                    <p className="stat-value">{career.demand}</p>
                                                </div>
                                            </div>
                                            <div className="stat-item">
                                                <BookOpen className="h-5 w-5 text-purple-400" />
                                                <div>
                                                    <p className="stat-label">Duración</p>
                                                    <p className="stat-value">{career.duration}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleOpenModal(career)}
                                        className="btn btn-primary flex-1"
                                    >
                                        Ver Detalles Completos <ArrowRight className="ml-2 h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Personalized Advice */}
                {testResult && (
                    <div className="mb-8">
                        <PersonalizedAdvice testResult={testResult} topCareerData={mainCareer} />
                    </div>
                )}

                {/* Academic Path Visualizer */}
                {mainCareer && testResult && (
                    <div className="mb-8">
                        <AcademicPathVisualizer career={mainCareer} testResult={testResult} />
                    </div>
                )}

                {/* Explore More Careers */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">¿Quieres explorar más opciones?</h3>
                    <p className="text-slate-400 mb-6">Consulta con nuestra IA para obtener recomendaciones personalizadas</p>
                    <Link to="/chat" className="btn btn-primary inline-flex items-center">
                        <MessageCircle className="mr-2 h-4 w-4" /> Hablar con VocAI
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
