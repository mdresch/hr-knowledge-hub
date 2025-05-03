import React from 'react';
import { Link } from 'react-router-dom';
import { HrKnowledgeArea } from '../data/hrKnowledgeAreas';

interface KnowledgeCardProps {
  area: HrKnowledgeArea;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ area }) => {
  // Use the icon component directly
  const IconComponent = area.icon;

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
        <h3 className="text-xl font-semibold text-gray-800">{area.title}</h3>
      </div>
      <p className="text-gray-600 flex-grow">{area.description}</p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          area.category === 'core' 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-purple-100 text-purple-700'
        }`}>
          {area.category === 'core' ? 'Core Knowledge' : 'Specialized Knowledge'}
        </span>
      </div>
    </Link>
  );
};

export default KnowledgeCard;