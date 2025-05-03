import React from 'react';
import { hrKnowledgeAreas } from '../data/hrKnowledgeAreas';
import KnowledgeCard from '../components/KnowledgeCard';
import { BookOpen } from 'lucide-react';

const CoreKnowledge: React.FC = () => {
  const coreAreas = hrKnowledgeAreas.filter(area => area.category === 'core');

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Core HR Knowledge Areas</h1>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Core HR knowledge areas form the foundation of human resources management. These essential domains encompass the fundamental responsibilities and competencies that every HR professional must master to effectively support organizational success and employee well-being.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Strategic Impact</h3>
                <p className="text-gray-600">These core competencies directly influence organizational performance, employee satisfaction, and business outcomes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Essential Skills</h3>
                <p className="text-gray-600">Master these areas to build a strong foundation for your HR career and deliver value to your organization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreAreas.map((area) => (
            <KnowledgeCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreKnowledge;