import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [initialMessage, setInitialMessage] = useState('');

    const openChat = (message = '') => {
        if (message) {
            setInitialMessage(message);
        }
        setIsOpen(true);
    };

    const closeChat = () => {
        setIsOpen(false);
        setInitialMessage('');
    };

    return (
        <ChatContext.Provider value={{ isOpen, openChat, closeChat, initialMessage, setInitialMessage }}>
            {children}
        </ChatContext.Provider>
    );
};
