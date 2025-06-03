import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'react-feather';
import '../shared/styles/languageSwitch.css';

type Language = {
  code: string;
  name: string;
  flag?: string;
};

type LanguageSwitchProps = {
  languages: Language[];
  initialLanguage?: string;
  onChange: (languageCode: string) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  darkMode?: boolean;
};

const LanguageSwitch = ({
  languages,
  initialLanguage = 'en',
  onChange,
  position = 'bottom-right',
  darkMode = false,
}: LanguageSwitchProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages.find(lang => lang.code === initialLanguage) || languages[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mapeamento de classes CSS para posições
  const positionClasses = {
    'top-right': 'position-top-right',
    'top-left': 'position-top-left',
    'bottom-right': 'position-bottom-right',
    'bottom-left': 'position-bottom-left',
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    onChange(lang.code);
    setIsOpen(false);
  };

  return (
    <div
      className={`language-switch ${darkMode ? 'dark-mode' : ''}`}
      ref={dropdownRef}
    >
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className="language-icon">
          <Globe size={16} />
          <span>{currentLanguage.name}</span>
        </div>
        <ChevronDown
          size={16}
          className={`dropdown-chevron ${isOpen ? 'open' : ''}`}
        />
      </button>

      {isOpen && (
        <div className={`language-dropdown ${positionClasses[position]}`}>
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`language-option ${lang.code === currentLanguage.code ? 'selected' : ''}`}
              onClick={() => handleLanguageChange(lang)}
              role="option"
              aria-selected={lang.code === currentLanguage.code}
            >
              <div className="language-icon">

                {lang.flag && (<span>
                  <img
                    src={`https://flagcdn.com/${lang.flag}.svg`}
                    style={{ marginRight: 8, verticalAlign: 'middle', width: 20 }}

                  />
                </span>)}

                <>{lang.name}</>
              </div>
              {lang.code === currentLanguage.code && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;