
import React, { useState } from 'react';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState('EN');
  const [isOpen, setIsOpen] = useState(false);

  const languages = ['EN', 'FR', 'ES'];

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {language}
        <svg className={`transition-transform duration-200 ml-1 w-4 h-4 ${isOpen ? 'transform rotate-180' : 'transform rotate-270'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="flex flex-col space-y-2 absolute">
          {languages.map((language) => (
            <button key={language} onClick={() => { setLanguage(language); setIsOpen(false); }}>
              {language}
            </button>
          ))}
        </div>
      )}
    </div >
  );
}