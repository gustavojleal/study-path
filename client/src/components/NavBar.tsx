import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchBox from './SearchBox';
import LanguageSwitch from './LanguageSwitch';



const NavBar = () => {
  const { i18n, t } = useTranslation();
  const languages = [
    { code: 'en', name: 'English', flag: 'us' },
    { code: 'pt', name: 'Português', flag: 'br' },
    { code: 'es', name: 'Español', flag: 'es' },
    { code: 'fr', name: 'Français', flag: 'fr' },
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const handleSearchSubmit = (searchTerm: string) => {
    console.log(`Searching for: ${searchTerm}`);

  };
  return (
    <div>

      <nav className="navbar">
        <ul>
          <li><Link to="/HomePage">Study Path</Link></li>
          <li><Link to="/CoursesPage">{t("header.links.courses")}</Link></li>
          <li><SearchBox
            placeHolder={t("header.search.placeholder")}
            onSubmit={handleSearchSubmit}
            ariaLabel={t("header.search.ariaLabel")}
            darkMode={true} // Defina como true se estiver usando tema escuro
          /></li>
          <li className="language-switch-container">
            <LanguageSwitch
              languages={languages}
              initialLanguage="pt"
              onChange={handleLanguageChange}
              position="bottom-right"
            />

          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;