import { MessageCircle, Send, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';

const ChatPage = () => {
    const { initialMessage, setInitialMessage } = useChat();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const { user } = useAuth();

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Load messages from localStorage on mount
    useEffect(() => {
        if (user) {
            const savedMessages = localStorage.getItem(`chat_history_${user.id}`);
            if (savedMessages) {
                setMessages(JSON.parse(savedMessages));
            } else {
                // Initial welcome message if no history exists
                setMessages([
                    {
                        role: 'assistant',
                        content: `¡Hola${user ? ' ' + user.name.split(' ')[0] : ''}! 👋 Soy tu asistente vocacional VocAI. Estoy aquí para ayudarte a explorar carreras, universidades y resolver tus dudas sobre tu futuro profesional. ¿Por dónde te gustaría empezar?`
                    }
                ]);
            }
        }
    }, [user]);

    // Save messages to localStorage whenever they change
    useEffect(() => {
        if (user && messages.length > 0) {
            localStorage.setItem(`chat_history_${user.id}`, JSON.stringify(messages));
        }
    }, [messages, user]);

    // Handle initial message from context (e.g. from Career Modal)
    useEffect(() => {
        if (initialMessage) {
            setInput(initialMessage);
            // Optional: Auto-send could be implemented here
            // setInitialMessage(''); 
        }
    }, [initialMessage]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setError(null);

        // Add user message to state
        const newUserMessage = { role: 'user', content: userMessage };
        setMessages(prev => [...prev, newUserMessage]);
        setIsLoading(true);

        try {
            if (!apiKey || apiKey === 'PEGA_TU_API_KEY_AQUI') {
                throw new Error('API key no configurada');
            }

            // Build conversation history for Gemini
            // Gemini expects: role: "user" or "model" (not "assistant")
            const systemPrompt = `Eres VocAI, un asistente experto en orientación vocacional para jóvenes peruanos de 15-22 años.

CONTEXTO:
- Conoces todas las carreras universitarias disponibles en Perú
- Estás familiarizado con el mercado laboral peruano actual
- Conoces las principales universidades del Perú (UPC, UTEC, PUCP, UNMSM, etc.)

INSTRUCCIONES:
- Responde de manera amigable y motivadora en español
- Sé conciso (máximo 3-4 párrafos cortos)
- Usa emojis ocasionalmente para hacerlo más amigable
- Si te preguntan sobre una carrera, menciona: campo laboral, salario aproximado en Perú, y universidades recomendadas
- Mantén el contexto de la conversación y recuerda lo que el usuario dijo anteriormente`;

            // Convert messages to Gemini format
            const conversationHistory = [
                // System prompt as first user message
                {
                    role: 'user',
                    parts: [{ text: systemPrompt + '\n\nOK' }]
                },
                {
                    role: 'model',
                    parts: [{ text: 'Entendido. Soy VocAI, tu asistente de orientación vocacional. Estoy listo para ayudarte con información sobre carreras y universidades en Perú, manteniendo el contexto de nuestra conversación.' }]
                }
            ];

            // Add conversation history (excluding welcome message)
            messages.forEach(msg => {
                // Skip the initial welcome message
                if (msg.role === 'assistant' && msg.content.includes('¡Hola')) return;

                conversationHistory.push({
                    role: msg.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: msg.content }]
                });
            });

            // Add the new user message
            conversationHistory.push({
                role: 'user',
                parts: [{ text: userMessage }]
            });

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: conversationHistory
                    })
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `Error ${response.status}`);
            }

            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!text) {
                throw new Error('No se recibió respuesta de la IA');
            }

            setMessages(prev => [...prev, { role: 'assistant', content: text }]);
        } catch (error) {
            console.error('Error completo:', error);
            let errorMessage = 'Lo siento, hubo un problema. ';
            if (error.message.includes('quota') || error.message.includes('429')) {
                errorMessage += 'Has excedido el límite de uso. Intenta más tarde.';
            } else if (error.message.includes('API key')) {
                errorMessage += 'Verifica tu API key en el archivo .env';
            } else {
                errorMessage += 'Por favor intenta de nuevo.';
            }
            setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="page-container flex flex-col h-screen pt-20 pb-0">
            <div className="container h-full flex flex-col max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 px-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                        <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h1 className="heading-md text-white">Asistente VocAI</h1>
                        <p className="text-body text-sm">Tu experto personal en orientación vocacional</p>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden flex flex-col mb-6 mx-4 shadow-2xl">
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                <div className={`h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'assistant' ? 'bg-secondary/20' : 'bg-primary/20'}`}>
                                    {msg.role === 'assistant' ? (
                                        <Sparkles className="h-5 w-5 text-secondary" />
                                    ) : (
                                        <div className="h-5 w-5 text-primary font-bold text-center leading-none">Tú</div>
                                    )}
                                </div>
                                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none'}`}>
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                                    <Sparkles className="h-5 w-5 text-secondary" />
                                </div>
                                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-slate-950 border-t border-slate-800">
                        {error && (
                            <div className="text-xs text-red-400 mb-2 p-2 bg-red-500/10 rounded">
                                {error}
                            </div>
                        )}
                        <div className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Pregunta sobre carreras, universidades o tu futuro..."
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-4 pr-14 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                disabled={isLoading}
                                autoFocus
                            />
                            <button
                                onClick={sendMessage}
                                disabled={isLoading || !input.trim()}
                                className="absolute right-2 top-2 bottom-2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                        <p className="text-center text-xs text-slate-500 mt-3">
                            VocAI puede cometer errores. Verifica la información importante.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
