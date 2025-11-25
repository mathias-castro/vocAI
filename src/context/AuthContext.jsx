import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for saved user in localStorage on mount
        const savedUser = localStorage.getItem('vocai_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login logic
        const storedUsers = JSON.parse(localStorage.getItem('vocai_users_db') || '[]');
        const foundUser = storedUsers.find(u => u.email === email && u.password === password);

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem('vocai_user', JSON.stringify(foundUser));
            return { success: true };
        }
        return { success: false, error: 'Credenciales inválidas' };
    };

    const register = (name, email, password) => {
        // Mock register logic
        const storedUsers = JSON.parse(localStorage.getItem('vocai_users_db') || '[]');

        if (storedUsers.find(u => u.email === email)) {
            return { success: false, error: 'El correo ya está registrado' };
        }

        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password,
            results: [] // Array to store test results
        };

        storedUsers.push(newUser);
        localStorage.setItem('vocai_users_db', JSON.stringify(storedUsers));

        // Auto login after register
        setUser(newUser);
        localStorage.setItem('vocai_user', JSON.stringify(newUser));
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('vocai_user');
    };

    const saveResult = (resultData) => {
        if (!user) return;

        // Support both old format (string) and new format (object)
        const newResult = typeof resultData === 'string'
            ? {
                id: Date.now(),
                date: new Date().toISOString(),
                careerId: resultData
            }
            : {
                id: Date.now(),
                date: new Date().toISOString(),
                topCareer: resultData.topCareer,
                scores: resultData.scores,
                answers: resultData.answers,
                careerId: resultData.topCareer // backward compatibility
            };

        const updatedUser = { ...user, results: [newResult, ...user.results] };
        setUser(updatedUser);
        localStorage.setItem('vocai_user', JSON.stringify(updatedUser));

        // Update in DB as well
        const storedUsers = JSON.parse(localStorage.getItem('vocai_users_db') || '[]');
        const updatedUsers = storedUsers.map(u => u.id === user.id ? updatedUser : u);
        localStorage.setItem('vocai_users_db', JSON.stringify(updatedUsers));
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, saveResult, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
