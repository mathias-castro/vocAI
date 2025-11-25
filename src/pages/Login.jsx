import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const res = login(email, password);
        if (res.success) {
            navigate('/dashboard');
        } else {
            setError(res.error);
        }
    };

    return (
        <div className="page-container flex items-center justify-center">
            <div className="auth-card animate-scale-in">
                <div className="text-center mb-8">
                    <h1 className="heading-md text-white mb-2">Bienvenido de nuevo</h1>
                    <p className="text-body text-sm">Ingresa a tu cuenta para ver tus resultados.</p>
                </div>

                {error && (
                    <div className="error-alert">
                        <AlertCircle className="h-4 w-4" />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label className="form-label">Correo Electrónico</label>
                        <div className="input-wrapper">
                            <Mail className="input-icon" />
                            <input
                                type="email"
                                className="form-input"
                                placeholder="ejemplo@correo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Contraseña</label>
                        <div className="input-wrapper">
                            <Lock className="input-icon" />
                            <input
                                type="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Ingresar <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </form>

                <div className="auth-footer">
                    <p className="text-body text-sm">
                        ¿No tienes cuenta? <Link to="/register" className="text-primary font-bold hover:underline">Regístrate aquí</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
