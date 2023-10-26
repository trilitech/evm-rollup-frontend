"use client"

import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const languages = ['EN', 'FR', 'ES'];

  return (
    <div className="mt-2">
      <button onClick={() => setIsOpen(!isOpen)}>
        {language}
        <svg className={`transition-transform duration-200 ml-0.5 w-4 h-4 ${isOpen ? 'transform rotate-180' : 'transform rotate-270'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="flex flex-col space-y-2 absolute mt-2 text-white">
          {languages.map((lang) => (
            <button key={lang} onClick={() => { setLanguage(lang); setIsOpen(false); console.log(language) }}>
              {lang}
            </button>
          ))}
        </div>
      )}
    </div >
  );
}