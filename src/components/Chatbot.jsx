import { MessageCircle, X, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';

const Chatbot = () => {
    const { isOpen, openChat, closeChat, initialMessage, setInitialMessage } = useChat();
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

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    role: 'assistant',
                    content: `¡Hola${user ? ' ' + user.name.split(' ')[0] : ''}! 👋 Soy tu asistente vocacional VocAI. Puedo ayudarte con información sobre carreras, universidades en Perú, y orientación profesional. ¿En qué te gustaría que te ayude?`
                }
            ]);
        }

        if (isOpen && initialMessage) {
            setInput(initialMessage);
            // Optional: Auto-send the message? Let's just pre-fill it for now so user can confirm.
            // setInitialMessage(''); // Clear it after setting
        }
    }, [isOpen, initialMessage]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setError(null);

        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            if (!apiKey || apiKey === 'PEGA_TU_API_KEY_AQUI') {
                throw new Error('API key no configurada');
            }

            const prompt = `Eres VocAI, un asistente experto en orientación vocacional para jóvenes peruanos de 15-22 años.

CONTEXTO:
- Conoces todas las carreras universitarias disponibles en Perú
- Estás familiarizado con el mercado laboral peruano actual
- Conoces las principales universidades del Perú (UPC, UTEC, PUCP, UNMSM, etc.)

INSTRUCCIONES:
- Responde de manera amigable y motivadora
- Sé conciso (máximo 3-4 párrafos cortos)
- Usa emojis ocasionalmente
- Si te preguntan sobre una carrera, menciona: campo laboral, salario aproximado, y universidades

Pregunta: ${userMessage}`;

            // Llamada a la API de Gemini - usando gemini-2.5-flash (guía oficial)
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt
                            }]
                        }]
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

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: errorMessage
            }]);
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

    if (!user) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {!isOpen && (
                <button
                    onClick={() => openChat()}
                    className="chatbot-fab"
                    title="Abrir chat con IA"
                >
                    <MessageCircle className="h-7 w-7" />
                </button>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                                <MessageCircle className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">VocAI Assistant</h3>
                                <span className="text-xs text-white/80 flex items-center gap-1">
                                    <span className="h-2 w-2 rounded-full bg-green-400"></span> Con IA
                                </span>
                            </div>
                        </div>
                        <button onClick={closeChat} className="text-white/80 hover:text-white">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                {msg.role === 'assistant' && (
                                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                                        <span className="text-xs font-bold text-secondary">AI</span>
                                    </div>
                                )}
                                <div className={`message-bubble ${msg.role === 'user' ? 'user' : 'assistant'}`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex gap-2">
                                <div className="h-8 w-8 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                                    <span className="text-xs font-bold text-secondary">AI</span>
                                </div>
                                <div className="message-bubble assistant">
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

                    <div className="chatbot-input">
                        {error && (
                            <div className="text-xs text-red-400 mb-2 p-2 bg-red-500/10 rounded">
                                {error}
                            </div>
                        )}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Escribe un mensaje..."
                                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-secondary"
                                disabled={isLoading}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={isLoading || !input.trim()}
                                className="p-2 rounded-lg bg-secondary text-white hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
