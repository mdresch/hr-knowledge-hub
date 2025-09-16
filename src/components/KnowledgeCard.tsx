import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle } from 'lucide-react';
import { HrKnowledgeArea } from '../data/hrKnowledgeAreas';
import { useFavorites } from '../context/FavoritesContext';
import { useProgress } from '../context/ProgressContext';

interface KnowledgeCardProps {
  area: HrKnowledgeArea;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ area }) => {
  // Use the icon component directly
  const IconComponent = area.icon;
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isVisited } = useProgress();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking favorite button
    e.stopPropagation();
    toggleFavorite(area.id);
  };

  return (
    <Link 
      to={`/${area.category}/${area.id}`}
      className={`h-full ${
        area.category === 'core' 
          ? 'bg-white border-l-4 border-blue-600' 
          : 'bg-white border-l-4 border-purple-600'
      } rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col`}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${
          area.category === 'core' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
        } mr-4`}>
          {IconComponent && <IconComponent className="h-6 w-6" />}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 flex-grow">{area.title}</h3>
        <button
          onClick={handleFavoriteClick}
          className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
            isFavorite(area.id)
              ? 'text-red-500 hover:text-red-600'
              : 'text-gray-400 hover:text-red-500'
          }`}
          title={isFavorite(area.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`h-5 w-5 ${isFavorite(area.id) ? 'fill-current' : ''}`} />
        </button>
      </div>
      <p className="text-gray-600 flex-grow">{area.description}</p>
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          area.category === 'core' 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-purple-100 text-purple-700'
        }`}>
          {area.category === 'core' ? 'Core Knowledge' : 'Specialized Knowledge'}
        </span>
        {isVisited(area.id) && (
          <div className="flex items-center text-green-600" title="Visited">
            <CheckCircle className="h-4 w-4 mr-1" />
            <span className="text-xs font-medium">Visited</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default KnowledgeCard;