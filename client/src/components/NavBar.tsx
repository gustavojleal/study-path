import { Link } from 'react-router-dom';
import LanguageSwitch from './LanguageSwitch';

const NavBar = () => {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const handleLanguageChange = (langCode: string) => {
    console.log('Idioma selecionado:', langCode);
    // Aqui você implementaria a mudança de idioma
    // Ex: i18n.changeLanguage(langCode)
  };
  return (
    <div>

      <nav>
        <ul>
          <li><Link to="/HomePage">Home</Link></li>
          <li><Link to="/AboutPage">About</Link></li>
          <li><Link to="/CoursesPage">Courses</Link></li>
        </ul>
      </nav>
      <LanguageSwitch
        languages={languages}
        initialLanguage="pt"
        onChange={handleLanguageChange}
        position="bottom-right"
      />
    </div>
  )
}

export default NavBar;