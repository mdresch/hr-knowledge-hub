import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { hrKnowledgeAreas } from '../../data/hrKnowledgeAreas';

const CoreAreaDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const area = hrKnowledgeAreas.find(a => a.id === id && a.category === 'core');

  if (!area) return <Navigate to="/core" replace />;

  const Icon = area.icon;

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Icon className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">{area.title}</h1>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{area.description}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {area.sections.map((section, idx) => (
            <div key={idx} className={idx % 2 === 1 ? "bg-white rounded-lg shadow-lg p-8" : ""}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div className="flex items-start" key={i}>
                    {item.icon && <item.icon className="w-6 h-6 text-blue-600 mt-1 mr-3" />}
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.heading}</h3>
                      {item.description && <p className="text-gray-600">{item.description}</p>}
                      {item.list && (
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          {item.list.map((li, j) => <li key={j}>{li}</li>)}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {area.bestPractices && (
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Best Practices & Industry Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {area.bestPractices.map((bp, i) => (
                <div className="bg-white rounded-lg p-6" key={i}>
                  <h3 className="font-semibold text-lg mb-3 text-blue-600">{bp.heading}</h3>
                  <p className="text-gray-600">{bp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoreAreaDetail;