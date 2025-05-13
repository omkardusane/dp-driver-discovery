import { useEffect } from 'react';
const duration = 1000;

export default function Toast({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, duration);
        return () => clearTimeout(timer);
    }, [message]);
    if (!message) return null;
    return (
        <div className={`fixed bottom-4 right-4 px-4 py-2 text-white rounded shadow-lg transition delay-200 duration-300 ease-in-out transition-opacity bg-green-500`}>
            {message}
        </div>
    );
}
