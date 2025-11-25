import { Link, useNavigate } from 'react-router-dom';
import { Brain, Menu, X, User, LogOut, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const { openChat } = useChat();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <Brain className="h-8 w-8 text-indigo-500" />
                        <span className="text-xl font-bold text-white">VocAI</span>
                    </Link>

                    {/* Center Menu */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <Link to="/" className="text-slate-300 hover:text-white transition-colors text-lg">
                            Inicio
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {user ? (
                            <>
                                <span className="text-white font-medium flex items-center gap-2 mr-2">
                                    <User className="h-4 w-4" /> {user.name}
                                </span>
                                <Link to="/chat" className="btn btn-secondary flex items-center gap-2">
                                    <MessageCircle className="h-4 w-4" /> Chat IA
                                </Link>
                                <Link to="/dashboard" className="btn btn-primary">
                                    Mi Dashboard
                                </Link>
                                <button onClick={handleLogout} className="text-slate-400 hover:text-white ml-2" title="Cerrar Sesión">
                                    <LogOut className="h-5 w-5" />
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-white hover:text-indigo-400 font-medium px-4">
                                    Ingresar
                                </Link>
                                <Link to="/register" className="btn btn-primary">
                                    Empezar Gratis
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="text-slate-300 hover:text-white">Inicio</Link>
                            <hr className="border-slate-800" />
                            {user ? (
                                <>
                                    <span className="text-white font-medium">{user.name}</span>
                                    <Link to="/dashboard" className="text-primary font-medium">Mi Dashboard</Link>
                                    <Link to="/chat" onClick={() => setIsOpen(false)} className="text-secondary font-medium text-left flex items-center gap-2">
                                        <MessageCircle className="h-4 w-4" /> Chat IA
                                    </Link>
                                    <button onClick={handleLogout} className="text-slate-400 text-left">Cerrar Sesión</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="text-white">Ingresar</Link>
                                    <Link to="/register" className="text-primary font-medium">Empezar Gratis</Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
