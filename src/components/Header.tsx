import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Briefcase, Heart, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useProgress } from '../context/ProgressContext';
import { hrKnowledgeAreas } from '../data/hrKnowledgeAreas';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();
  const { getVisitedCount } = useProgress();
  
  const totalAreas = hrKnowledgeAreas.length;
  const visitedCount = getVisitedCount();
  const progressPercentage = Math.round((visitedCount / totalAreas) * 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Briefcase className="w-8 h-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">HR Knowledge Hub</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search knowledge areas..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <nav className="flex space-x-6">
              <div className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-medium" title={`${visitedCount} of ${totalAreas} areas explored`}>
                <BookOpen className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">Progress:</span>
                <span className="ml-1 bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                  {progressPercentage}%
                </span>
              </div>
              <Link
                to="/favorites"
                className={`text-gray-700 hover:text-red-600 transition-colors font-medium flex items-center ${
                  location.pathname === '/favorites' ? 'text-red-600' : ''
                }`}
                title="Your favorites"
              >
                <Heart className={`h-4 w-4 mr-1 ${favorites.length > 0 ? 'fill-current' : ''}`} />
                Favorites
                {favorites.length > 0 && (
                  <span className="ml-1 bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                    {favorites.length}
                  </span>
                )}
              </Link>
              <Link
                to="/core"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/core' ? 'text-blue-600' : ''
                }`}
              >
                Core HR Areas
              </Link>
              <Link
                to="/specialized"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/specialized' ? 'text-blue-600' : ''
                }`}
              >
                Specialized Knowledge
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search knowledge areas..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center text-gray-700 hover:text-green-600 transition-colors font-medium" title={`${visitedCount} of ${totalAreas} areas explored`}>
                <BookOpen className="h-4 w-4 mr-1" />
                Progress:
                <span className="ml-1 bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                  {progressPercentage}%
                </span>
              </div>
              <Link
                to="/favorites"
                className={`text-gray-700 hover:text-red-600 transition-colors font-medium flex items-center ${
                  location.pathname === '/favorites' ? 'text-red-600' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className={`h-4 w-4 mr-1 ${favorites.length > 0 ? 'fill-current' : ''}`} />
                Favorites
                {favorites.length > 0 && (
                  <span className="ml-1 bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                    {favorites.length}
                  </span>
                )}
              </Link>
              <Link
                to="/core"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/core' ? 'text-blue-600' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Core HR Areas
              </Link>
              <Link
                to="/specialized"
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/specialized' ? 'text-blue-600' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Specialized Knowledge
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;