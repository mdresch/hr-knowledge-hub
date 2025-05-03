import React from 'react';
import KnowledgeCard from './KnowledgeCard';
import { KnowledgeArea } from '../data/hrKnowledgeAreas';

interface KnowledgeSectionProps {
  title: string;
  subtitle: string;
  areas: KnowledgeArea[];
  id: string;
  category: 'core' | 'specialized';
}

const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({ title, subtitle, areas, id, category }) => {
  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            category === 'core' ? 'text-blue-600' : 'text-purple-600'
          }`}>
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <KnowledgeCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;