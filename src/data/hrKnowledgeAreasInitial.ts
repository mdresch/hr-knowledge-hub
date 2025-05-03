export interface KnowledgeArea {
    id: string;
    title: string;
    description: string;
    icon: string;
    category: 'core' | 'specialized';
  }
  
  export const hrKnowledgeAreas: KnowledgeArea[] = [
    {
      id: 'talent-acquisition',
      title: 'Talent Acquisition & Recruitment',
      description: 'Finding, attracting, and selecting top talent while ensuring the best hiring practices.',
      icon: 'users',
      category: 'core',
    },
    {
      id: 'employee-relations',
      title: 'Employee Relations & Engagement',
      description: 'Managing workplace dynamics, resolving disputes, and fostering a positive work culture.',
      icon: 'heart-handshake',
      category: 'core',
    },
    {
      id: 'compensation',
      title: 'Compensation & Benefits',
      description: 'Designing fair, motivating, and compliant salary structures and benefit programs.',
      icon: 'banknote',
      category: 'core',
    },
    {
      id: 'training',
      title: 'Training & Development',
      description: 'Helping employees grow their skills and advance in their careers.',
      icon: 'graduation-cap',
      category: 'core',
    },
    {
      id: 'performance',
      title: 'Performance Management',
      description: 'Establishing evaluation systems, feedback processes, and goal-setting frameworks.',
      icon: 'bar-chart',
      category: 'core',
    },
    {
      id: 'strategy',
      title: 'HR Strategy & Workforce Planning',
      description: 'Aligning HR initiatives with organizational goals and ensuring the right talent in the right roles.',
      icon: 'compass',
      category: 'core',
    },
    {
      id: 'diversity',
      title: 'Diversity, Equity & Inclusion (DEI)',
      description: 'Creating an equitable workplace and promoting diverse representation and accessibility.',
      icon: 'users-round',
      category: 'core',
    },
    {
      id: 'technology',
      title: 'HR Technology & Systems',
      description: 'Implementing HR software, data analytics, and automation tools for efficiency.',
      icon: 'laptop',
      category: 'core',
    },
    {
      id: 'legal',
      title: 'Legal & Compliance',
      description: 'Navigating labor laws, workplace regulations, and ensuring HR policies adhere to legal requirements.',
      icon: 'scale',
      category: 'core',
    },
    {
      id: 'change',
      title: 'Change Management & Organizational Development',
      description: 'Supporting companies through transitions, restructuring, and growth.',
      icon: 'refresh-cw',
      category: 'core',
    },
    {
      id: 'branding',
      title: 'Employer Branding',
      description: 'Positioning a company as a top employer to attract the best candidates.',
      icon: 'briefcase',
      category: 'specialized',
    },
    {
      id: 'analytics',
      title: 'HR Analytics & Metrics',
      description: 'Using data-driven insights for better HR decision-making.',
      icon: 'line-chart',
      category: 'specialized',
    },
    {
      id: 'leadership',
      title: 'Leadership Development',
      description: 'Identifying and nurturing future leaders within an organization.',
      icon: 'award',
      category: 'specialized',
    },
    {
      id: 'safety',
      title: 'Health & Safety',
      description: 'Ensuring workplace safety protocols and employee well-being programs.',
      icon: 'shield',
      category: 'specialized',
    },
    {
      id: 'remote',
      title: 'Global & Remote Workforce Management',
      description: 'Managing international HR operations and supporting remote employees effectively.',
      icon: 'globe',
      category: 'specialized',
    },
  ];