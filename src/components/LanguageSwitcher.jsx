import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false); // Cerrar el menú después de seleccionar un idioma
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="px-2 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm"
            >
                {i18n.language === 'es' ? 'ES' : 'EN'}
            </button>
            {isOpen && (
                <ul className="absolute right-0 mt-2 w-20 bg-gray-800 border rounded shadow-lg">
                    <li>
                        <button
                            onClick={() => changeLanguage('es')}
                            className="block px-4 py-2 w-full text-left text-white hover:bg-gray-700 text-sm"
                        >
                            Español
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => changeLanguage('en')}
                            className="block px-4 py-2 w-full text-left text-white hover:bg-gray-700 text-sm"
                        >
                            English
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default LanguageSwitcher;

