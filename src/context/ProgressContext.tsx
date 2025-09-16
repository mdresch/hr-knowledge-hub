import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  visitedAreas: string[];
  markAsVisited: (id: string) => void;
  isVisited: (id: string) => boolean;
  getVisitedCount: () => number;
  clearProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visitedAreas, setVisitedAreas] = useState<string[]>([]);

  // Load visited areas from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('hr-knowledge-hub-progress');
    if (savedProgress) {
      try {
        setVisitedAreas(JSON.parse(savedProgress));
      } catch {
        console.warn('Failed to parse progress from localStorage');
        setVisitedAreas([]);
      }
    }
  }, []);

  // Save progress to localStorage whenever visitedAreas change
  useEffect(() => {
    localStorage.setItem('hr-knowledge-hub-progress', JSON.stringify(visitedAreas));
  }, [visitedAreas]);

  const markAsVisited = (id: string) => {
    setVisitedAreas(prev => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const isVisited = (id: string) => {
    return visitedAreas.includes(id);
  };

  const getVisitedCount = () => {
    return visitedAreas.length;
  };

  const clearProgress = () => {
    setVisitedAreas([]);
  };

  return (
    <ProgressContext.Provider
      value={{
        visitedAreas,
        markAsVisited,
        isVisited,
        getVisitedCount,
        clearProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};