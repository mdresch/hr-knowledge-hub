import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import KnowledgeSection from './components/KnowledgeSection';
import Footer from './components/Footer';
import CoreKnowledge from './pages/CoreKnowledge';
import SpecializedKnowledge from './pages/SpecializedKnowledge';
import CoreAreaDetail from './pages/core/CoreAreaDetail';
import SpecializedAreaDetail from './pages/specialized/SpecializedAreaDetail';
import { hrKnowledgeAreas, HrKnowledgeArea as KnowledgeArea } from './data/hrKnowledgeAreas';

function App() {
  const [filteredAreas, setFilteredAreas] = useState<KnowledgeArea[]>(hrKnowledgeAreas);
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredAreas(hrKnowledgeAreas);
      return;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    const filtered = hrKnowledgeAreas.filter(area => 
      area.title.toLowerCase().includes(lowerCaseQuery) || 
      area.description.toLowerCase().includes(lowerCaseQuery)
    );
    
    setFilteredAreas(filtered);
  };
  
  const coreAreas = filteredAreas.filter(area => area.category === 'core');
  const specializedAreas = filteredAreas.filter(area => area.category === 'specialized');

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header onSearch={handleSearch} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <main>
                <KnowledgeSection
                  id="core"
                  title="Core HR Areas of Expertise"
                  subtitle="Essential knowledge and skills that form the foundation of HR practice"
                  areas={coreAreas}
                  category="core"
                />
                <KnowledgeSection
                  id="specialized"
                  title="Specialized HR Knowledge Areas"
                  subtitle="Advanced domains of expertise for HR professionals seeking to expand their impact"
                  areas={specializedAreas}
                  category="specialized"
                />
              </main>
            </>
          } />
          <Route path="/core" element={<CoreKnowledge />} />
          <Route path="/specialized" element={<SpecializedKnowledge />} />
          {/* Dynamic route for all core area detail pages */}
          <Route path="/core/:id" element={<CoreAreaDetail />} />
          <Route path="/specialized/:id" element={<SpecializedAreaDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;