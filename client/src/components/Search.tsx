import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  slug: string;
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Buscar cursos na API
  const fetchCourses = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Substitua pela URL real da sua API
      const response = await fetch(`/api/courses/search?q=${encodeURIComponent(query)}`);

      if (!response.ok) {
        throw new Error('Erro na busca de cursos');
      }

      const data: Course[] = await response.json();
      setSearchResults(data);
      setIsDropdownOpen(data.length > 0);
    } catch (err) {
      setError('Não foi possível carregar os resultados');
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounce para evitar muitas requisições
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchCourses(searchTerm);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/cursos?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setIsDropdownOpen(false);
    }
  };

  const handleCourseClick = (courseSlug: string) => {
    navigate(`/curso/${courseSlug}`);
    setSearchTerm('');
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Buscar cursos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm && setIsDropdownOpen(true)}
          className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          aria-label="Buscar cursos"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
          aria-label="Pesquisar"
        >
          🔍
        </button>
      </form>

      {/* Dropdown de resultados */}
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Carregando...</div>
          ) : error ? (
            <div className="p-4 text-red-500">{error}</div>
          ) : searchResults.length > 0 ? (
            <ul>
              {searchResults.map((course) => (
                <li
                  key={course.id}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition flex items-center"
                  onClick={() => handleCourseClick(course.slug)}
                >
                  <span className="text-blue-600 mr-2">📚</span>
                  <span className="truncate">{course.title}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-gray-500">Nenhum curso encontrado</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;