import React from 'react';
import { hrKnowledgeAreas } from '../data/hrKnowledgeAreas';
import KnowledgeCard from '../components/KnowledgeCard';
import { Sparkles } from 'lucide-react';

const SpecializedKnowledge: React.FC = () => {
  const specializedAreas = hrKnowledgeAreas.filter(area => area.category === 'specialized');

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-12 h-12 text-purple-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Specialized HR Knowledge Areas</h1>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Specialized HR knowledge areas represent advanced expertise domains that enable HR professionals to tackle complex challenges and drive innovation in modern organizations. These areas require deeper understanding and focused development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Advanced Expertise</h3>
                <p className="text-gray-600">Develop specialized skills to address emerging workplace challenges and drive organizational transformation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Future Focus</h3>
                <p className="text-gray-600">Stay ahead of industry trends and prepare for the evolving landscape of human resources management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedAreas.map((area) => (
            <KnowledgeCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializedKnowledge;