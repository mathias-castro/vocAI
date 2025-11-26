import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        const res = register(name, email, password);
        if (res.success) {
            navigate('/test');
        } else {
            setError(res.error);
        }
    };

    return (
        <div className="page-container flex items-center justify-center">
            <div className="auth-card animate-scale-in">
                <div className="text-center mb-8">
                    <h1 className="heading-md text-white mb-2">Crea tu cuenta</h1>
                    <p className="text-body text-sm">Empieza tu viaje vocacional hoy mismo.</p>
                </div>

                {error && (
                    <div className="error-alert">
                        <AlertCircle className="h-4 w-4" />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label className="form-label">Nombre Completo</label>
                        <div className="input-wrapper">
                            <User className="input-icon" />
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Juan Pérez"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

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
                        Registrarse <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </form>

                <div className="auth-footer">
                    <p className="text-body text-sm">
                        ¿Ya tienes cuenta? <Link to="/login" className="text-primary font-bold hover:underline">Ingresa aquí</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
