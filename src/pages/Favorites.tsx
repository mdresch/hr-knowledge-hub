import React from 'react';
import { Heart, BookOpen } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { hrKnowledgeAreas } from '../data/hrKnowledgeAreas';
import KnowledgeCard from '../components/KnowledgeCard';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  // Filter knowledge areas to show only favorites
  const favoriteAreas = hrKnowledgeAreas.filter(area => favorites.includes(area.id));

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500 mr-3 fill-current" />
            <h1 className="text-4xl font-bold text-gray-800">Your Favorites</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Keep track of the HR knowledge areas you want to revisit. Your favorites are saved locally and will persist between sessions.
          </p>
        </div>

        {/* Favorites Content */}
        {favoriteAreas.length > 0 ? (
          <>
            <div className="mb-8">
              <p className="text-gray-600 text-center">
                You have {favoriteAreas.length} favorite knowledge area{favoriteAreas.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteAreas.map((area) => (
                <KnowledgeCard key={area.id} area={area} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">No favorites yet</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Start exploring HR knowledge areas and click the heart icon to add them to your favorites!
            </p>
            <div className="space-x-4">
              <a
                href="/core"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Explore Core Areas
              </a>
              <a
                href="/specialized"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Explore Specialized Areas
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;