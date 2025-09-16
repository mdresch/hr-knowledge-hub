import { Users, Target, Briefcase, CheckCircle, HeartHandshake, Shield, MessageCircle, Trophy, BarChart, UsersRound, Laptop, Scale, RefreshCw } from 'lucide-react';

export interface HrKnowledgeArea {
  id: string;
  category: 'core' | 'specialized';
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  sections: {
    title: string;
    items: {
      icon?: React.FC<{ className?: string }>;
      heading: string;
      description: string;
      list?: string[];
    }[];
  }[];
  bestPractices?: {
    heading: string;
    description: string;
  }[];
}

export const hrKnowledgeAreas: HrKnowledgeArea[] = [
  {
    id: 'talent-acquisition',
    category: 'core',
    icon: Users,
    title: 'Talent Acquisition & Recruitment',
    description: 'Talent Acquisition is a strategic function that goes beyond traditional recruitment, focusing on long-term human resources planning and finding specialists for hard-to-fill positions.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            icon: Target,
            heading: 'Strategic Workforce Planning',
            description: 'Analyzing future hiring needs, identifying skill gaps, and developing proactive recruitment strategies.',
          },
          {
            icon: Briefcase,
            heading: 'Employer Branding',
            description: 'Building and maintaining a strong employer brand to attract top talent and stand out in the job market.',
          },
          {
            icon: CheckCircle,
            heading: 'Selection Process Management',
            description: 'Designing and implementing effective screening, interviewing, and assessment methods.',
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Sourcing Strategies',
            description: '',
            list: [
              'Social media recruitment',
              'Employee referral programs',
              'Professional networking',
              'Job board optimization',
            ],
          },
          {
            heading: 'Interview Techniques',
            description: '',
            list: [
              'Behavioral interviewing',
              'Competency-based assessment',
              'Cultural fit evaluation',
              'Technical skills assessment',
            ],
          },
          {
            heading: 'Compliance & Ethics',
            description: '',
            list: [
              'Equal employment opportunity',
              'Anti-discrimination laws',
              'Data privacy regulations',
              'Fair hiring practices',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Data-Driven Recruitment',
        description: 'Leveraging analytics and metrics to improve hiring decisions and process efficiency.',
      },
      {
        heading: 'AI & Automation',
        description: 'Implementing AI-powered tools for screening, scheduling, and candidate engagement.',
      },
      {
        heading: 'Candidate Experience',
        description: 'Creating positive, engaging experiences throughout the recruitment process.',
      },
    ],
  },
  {
    id: 'employee-relations',
    category: 'core',
    icon: HeartHandshake,
    title: 'Employee Relations & Engagement',
    description: 'Employee Relations & Engagement is crucial for creating a positive workplace culture, fostering strong relationships between employees and management, and ensuring high levels of workforce satisfaction and productivity.',
    sections: [
      {
        title: 'Core Functions',
        items: [
          {
            icon: Shield,
            heading: 'Conflict Resolution',
            description: 'Mediating workplace disputes, addressing grievances, and facilitating positive outcomes through effective communication and fair processes.',
          },
          {
            icon: MessageCircle,
            heading: 'Employee Communication',
            description: 'Developing and implementing communication strategies that foster transparency, trust, and open dialogue throughout the organization.',
          },
          {
            icon: Trophy,
            heading: 'Employee Recognition',
            description: 'Creating and managing programs that acknowledge and reward employee contributions, achievements, and milestones.',
          },
        ],
      },
      {
        title: 'Key Competencies',
        items: [
          {
            heading: 'Relationship Management',
            description: 'Building trust and rapport, active listening skills, emotional intelligence, and conflict management.',
          },
          {
            heading: 'Policy Development',
            description: 'Workplace conduct guidelines, disciplinary procedures, employee handbook creation, and policy communication.',
          },
          {
            heading: 'Engagement Strategies',
            description: 'Employee feedback programs, recognition initiatives, team building activities, and culture development.',
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Employee Experience Design',
        description: 'Creating meaningful workplace experiences that enhance engagement and satisfaction throughout the employee lifecycle.',
      },
      {
        heading: 'Digital Engagement Tools',
        description: 'Leveraging technology platforms for continuous feedback, recognition, and communication.',
      },
      {
        heading: 'Well-being Programs',
        description: 'Implementing holistic initiatives that support employee mental, physical, and emotional health.',
      },
    ],
  },
  {
    id: 'compensation-benefits',
    category: 'core',
    icon: CheckCircle,
    title: 'Compensation & Benefits',
    description: 'Compensation & Benefits involves designing and managing salary structures, incentive programs, and employee benefits to attract, motivate, and retain talent.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Salary Benchmarking',
            description: 'Analyzing market data to ensure competitive and equitable pay practices.',
          },
          {
            heading: 'Benefits Administration',
            description: 'Managing health, retirement, wellness, and other employee benefit programs.',
          },
          {
            heading: 'Incentive Programs',
            description: 'Designing bonus, commission, and recognition programs to drive performance.',
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Regulatory Compliance',
            description: '',
            list: [
              'Fair Labor Standards Act (FLSA)',
              'Equal Pay Act',
              'Tax regulations',
              'Benefits compliance (e.g., COBRA, ERISA)',
            ],
          },
          {
            heading: 'Data Analysis',
            description: '',
            list: [
              'Compensation surveys',
              'Cost modeling',
              'Pay equity analysis',
            ],
          },
          {
            heading: 'Communication',
            description: '',
            list: [
              'Benefits education',
              'Total rewards statements',
              'Employee support',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Total Rewards Strategy',
        description: 'Aligning compensation, benefits, and recognition with organizational goals.',
      },
      {
        heading: 'Personalized Benefits',
        description: 'Offering flexible and customizable benefits to meet diverse employee needs.',
      },
      {
        heading: 'Pay Transparency',
        description: 'Communicating pay structures and decisions openly to build trust.',
      },
    ],
  },
  {
    id: 'learning-development',
    category: 'core',
    icon: Trophy,
    title: 'Learning & Development',
    description: 'Learning & Development focuses on building employee skills, knowledge, and capabilities to support organizational growth and individual career progression.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Training Needs Analysis',
            description: 'Identifying skill gaps and development opportunities across the workforce.',
          },
          {
            heading: 'Program Design & Delivery',
            description: 'Creating and implementing effective learning programs and workshops.',
          },
          {
            heading: 'Leadership Development',
            description: 'Developing future leaders through targeted programs and coaching.',
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Instructional Design',
            description: '',
            list: [
              'Curriculum development',
              'E-learning platforms',
              'Blended learning',
            ],
          },
          {
            heading: 'Evaluation & Measurement',
            description: '',
            list: [
              'Learning analytics',
              'ROI of training',
              'Feedback mechanisms',
            ],
          },
          {
            heading: 'Change Management',
            description: '',
            list: [
              'Facilitating adoption',
              'Supporting transitions',
              'Stakeholder engagement',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Continuous Learning Culture',
        description: 'Encouraging ongoing development and knowledge sharing.',
      },
      {
        heading: 'Microlearning',
        description: 'Delivering content in small, focused segments for better retention.',
      },
      {
        heading: 'Digital Learning Tools',
        description: 'Leveraging technology for scalable and accessible training.',
      },
    ],
  },
  {
    id: 'performance-management',
    category: 'core',
    icon: Target,
    title: 'Performance Management',
    description: 'Performance Management ensures employees’ activities and outputs align with organizational goals through regular feedback, appraisals, and development plans.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Goal Setting',
            description: 'Collaborating with employees to set clear, measurable objectives.',
          },
          {
            heading: 'Performance Reviews',
            description: 'Conducting regular appraisals and providing constructive feedback.',
          },
          {
            heading: 'Development Planning',
            description: 'Identifying growth opportunities and supporting career advancement.',
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Coaching & Feedback',
            description: '',
            list: [
              'One-on-one meetings',
              'Real-time feedback',
              'Recognition and correction',
            ],
          },
          {
            heading: 'Appraisal Methods',
            description: '',
            list: [
              '360-degree feedback',
              'Self-assessment',
              'Objective-based reviews',
            ],
          },
          {
            heading: 'Legal & Ethical Considerations',
            description: '',
            list: [
              'Non-discrimination',
              'Documentation',
              'Privacy',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Continuous Feedback',
        description: 'Moving beyond annual reviews to regular, meaningful conversations.',
      },
      {
        heading: 'Employee Empowerment',
        description: 'Involving employees in goal setting and performance discussions.',
      },
      {
        heading: 'Technology Integration',
        description: 'Using performance management systems for tracking and analytics.',
      },
    ],
  },
  {
    id: 'strategy',
    category: 'core',
    icon: Briefcase,
    title: 'HR Strategy & Workforce Planning',
    description: 'HR Strategy & Workforce Planning aligns HR initiatives with organizational goals, ensuring the right talent is in the right roles at the right time.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Strategic Alignment',
            description: 'Ensuring HR programs and policies support the overall business strategy.'
          },
          {
            heading: 'Workforce Planning',
            description: 'Forecasting talent needs, succession planning, and resource allocation.'
          },
          {
            heading: 'Change Management',
            description: 'Guiding the organization through transformation, restructuring, and growth.'
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Business Acumen',
            description: '',
            list: [
              'Understanding financial statements',
              'Market and industry analysis',
              'Organizational design',
            ],
          },
          {
            heading: 'Data-Driven Decision Making',
            description: '',
            list: [
              'Workforce analytics',
              'Scenario planning',
              'KPI development',
            ],
          },
          {
            heading: 'Stakeholder Management',
            description: '',
            list: [
              'Executive communication',
              'Cross-functional collaboration',
              'Influencing and negotiation',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Agile HR',
        description: 'Adopting flexible, iterative approaches to HR planning and project management.'
      },
      {
        heading: 'Scenario Planning',
        description: 'Preparing for multiple future possibilities to ensure organizational resilience.'
      },
      {
        heading: 'Integrated Talent Management',
        description: 'Connecting recruitment, development, and retention strategies for maximum impact.'
      },
    ],
  },
  {
    id: 'diversity-inclusion',
    category: 'core',
    icon: UsersRound,
    title: 'Diversity, Equity & Inclusion (DEI)',
    description: 'Promoting a diverse, equitable, and inclusive workplace where all employees feel valued and empowered.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Diversity Recruitment',
            description: 'Attracting and hiring talent from a wide range of backgrounds and experiences.',
          },
          {
            heading: 'Inclusion Programs',
            description: 'Developing initiatives that foster a sense of belonging and respect for all employees.',
          },
          {
            heading: 'Equity Audits',
            description: 'Assessing and addressing disparities in pay, promotion, and opportunity.',
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Cultural Competence',
            description: '',
            list: [
              'Unconscious bias training',
              'Cross-cultural communication',
              'Global HR practices',
            ],
          },
          {
            heading: 'Policy Development',
            description: '',
            list: [
              'Anti-discrimination policies',
              'Accessibility standards',
              'Inclusive benefits',
            ],
          },
          {
            heading: 'Metrics & Reporting',
            description: '',
            list: [
              'Diversity dashboards',
              'EEO reporting',
              'Inclusion surveys',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Employee Resource Groups',
        description: 'Supporting affinity groups to build community and provide feedback.',
      },
      {
        heading: 'Inclusive Leadership',
        description: 'Training leaders to champion diversity and model inclusive behaviors.',
      },
      {
        heading: 'Transparent Reporting',
        description: 'Sharing progress and challenges openly to build trust and accountability.',
      },
    ],
  },
  {
    id: 'hr-technology',
    category: 'core',
    icon: Laptop,
    title: 'HR Technology & Systems',
    description: 'Leveraging digital tools and systems to streamline HR processes and enhance employee experience.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'HRIS Management',
            description: 'Implementing and maintaining Human Resource Information Systems.',
          },
          {
            heading: 'Process Automation',
            description: 'Automating repetitive HR tasks for efficiency and accuracy.',
          },
          {
            heading: 'Data Security',
            description: 'Ensuring the privacy and protection of employee data.',
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'System Integration',
            description: '',
            list: [
              'Payroll integration',
              'Benefits administration',
              'Single sign-on (SSO)',
            ],
          },
          {
            heading: 'Analytics & Reporting',
            description: '',
            list: [
              'HR dashboards',
              'Predictive analytics',
              'Compliance reporting',
            ],
          },
          {
            heading: 'Vendor Management',
            description: '',
            list: [
              'RFP processes',
              'Contract negotiation',
              'Service level agreements',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Cloud-Based Solutions',
        description: 'Adopting scalable, accessible HR platforms.',
      },
      {
        heading: 'Mobile Accessibility',
        description: 'Enabling employees to access HR services on any device.',
      },
      {
        heading: 'Continuous Improvement',
        description: 'Regularly updating systems to meet evolving business needs.',
      },
    ],
  },
  {
    id: 'legal-compliance',
    category: 'core',
    icon: Scale,
    title: 'Legal & Compliance',
    description: 'Ensuring all HR practices adhere to laws, regulations, and ethical standards.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Policy Development',
            description: 'Creating and updating employee handbooks and workplace policies.',
          },
          {
            heading: 'Risk Management',
            description: 'Identifying and mitigating legal risks in HR operations.',
          },
          {
            heading: 'Regulatory Reporting',
            description: 'Filing required reports and maintaining compliance documentation.',
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Employment Law',
            description: '',
            list: [
              'Labor standards',
              'Anti-harassment laws',
              'Leave regulations',
            ],
          },
          {
            heading: 'Investigation Procedures',
            description: '',
            list: [
              'Conducting workplace investigations',
              'Documentation best practices',
              'Confidentiality protocols',
            ],
          },
          {
            heading: 'Audit Readiness',
            description: '',
            list: [
              'Recordkeeping',
              'Internal audits',
              'Responding to external audits',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Proactive Training',
        description: 'Regular compliance training for HR and managers.',
      },
      {
        heading: 'Legal Partnerships',
        description: 'Collaborating with legal counsel for complex issues.',
      },
      {
        heading: 'Policy Transparency',
        description: 'Making policies easily accessible and understandable.',
      },
    ],
  },
  {
    id: 'change-management',
    category: 'core',
    icon: RefreshCw,
    title: 'Change Management & Organizational Development',
    description: 'Guiding organizations through change, transformation, and continuous improvement.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Change Planning',
            description: 'Developing strategies for organizational change and transformation.',
          },
          {
            heading: 'Stakeholder Engagement',
            description: 'Communicating with and supporting those affected by change.',
          },
          {
            heading: 'Culture Shaping',
            description: 'Fostering a culture that embraces innovation and adaptability.',
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Project Management',
            description: '',
            list: [
              'Change frameworks (e.g., ADKAR, Kotter)',
              'Timeline and resource planning',
              'Risk assessment',
            ],
          },
          {
            heading: 'Communication',
            description: '',
            list: [
              'Change communications',
              'Feedback loops',
              'Listening sessions',
            ],
          },
          {
            heading: 'Measurement & Evaluation',
            description: '',
            list: [
              'Change readiness assessments',
              'Success metrics',
              'Continuous improvement',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Agile Change',
        description: 'Using iterative approaches to manage and adapt to change.',
      },
      {
        heading: 'Employee Involvement',
        description: 'Engaging employees early and often in the change process.',
      },
      {
        heading: 'Celebrating Wins',
        description: 'Recognizing milestones and successes to build momentum.',
      },
    ],
  },
  {
    id: 'employer-branding',
    category: 'specialized',
    icon: Briefcase,
    title: 'Employer Branding',
    description: 'Positioning a company as a top employer to attract the best candidates and retain top talent.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Brand Strategy',
            description: 'Defining and communicating the organization’s unique value proposition as an employer.'
          },
          {
            heading: 'Employee Value Proposition (EVP)',
            description: 'Developing and promoting the benefits and culture that make the company attractive.'
          },
          {
            heading: 'Reputation Management',
            description: 'Monitoring and enhancing the company’s image on social media and employer review sites.'
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Content Creation',
            description: '',
            list: [
              'Storytelling',
              'Video and social media campaigns',
              'Employee testimonials',
            ],
          },
          {
            heading: 'Analytics',
            description: '',
            list: [
              'Brand perception surveys',
              'Engagement metrics',
              'Competitive benchmarking',
            ],
          },
          {
            heading: 'Internal Communication',
            description: '',
            list: [
              'Ambassador programs',
              'Employee engagement',
              'Change communication',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Authenticity',
        description: 'Showcasing real employee stories and experiences.'
      },
      {
        heading: 'Consistent Messaging',
        description: 'Aligning employer brand messaging across all channels.'
      },
      {
        heading: 'Employee Advocacy',
        description: 'Empowering employees to share their positive experiences.'
      },
    ],
  },
  {
    id: 'hr-analytics',
    category: 'specialized',
    icon: BarChart,
    title: 'HR Analytics & Metrics',
    description: 'Using data-driven insights for better HR decision-making and strategic planning.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Data Collection',
            description: 'Gathering HR data from various sources such as surveys, HRIS, and performance systems.'
          },
          {
            heading: 'Analysis & Reporting',
            description: 'Interpreting data to identify trends, risks, and opportunities.'
          },
          {
            heading: 'Strategic Recommendations',
            description: 'Translating insights into actionable HR strategies.'
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Statistical Analysis',
            description: '',
            list: [
              'Descriptive and predictive analytics',
              'Data visualization',
              'KPI development',
            ],
          },
          {
            heading: 'Technology Tools',
            description: '',
            list: [
              'HR dashboards',
              'Business intelligence platforms',
              'Excel, Power BI, Tableau',
            ],
          },
          {
            heading: 'Data Governance',
            description: '',
            list: [
              'Data privacy',
              'Data quality management',
              'Compliance',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Actionable Insights',
        description: 'Focusing on metrics that drive business outcomes.'
      },
      {
        heading: 'Continuous Improvement',
        description: 'Regularly reviewing and refining analytics processes.'
      },
      {
        heading: 'Collaboration',
        description: 'Working with business leaders to align analytics with strategy.'
      },
    ],
  },
  {
    id: 'leadership-development',
    category: 'specialized',
    icon: Trophy,
    title: 'Leadership Development',
    description: 'Identifying and nurturing future leaders within an organization to ensure long-term success.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Succession Planning',
            description: 'Preparing high-potential employees for leadership roles.'
          },
          {
            heading: 'Coaching & Mentoring',
            description: 'Providing guidance and support to emerging leaders.'
          },
          {
            heading: 'Leadership Programs',
            description: 'Designing and delivering targeted development initiatives.'
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Assessment Tools',
            description: '',
            list: [
              '360-degree feedback',
              'Personality assessments',
              'Leadership potential evaluation',
            ],
          },
          {
            heading: 'Program Design',
            description: '',
            list: [
              'Workshops and seminars',
              'E-learning modules',
              'Experiential learning',
            ],
          },
          {
            heading: 'Change Leadership',
            description: '',
            list: [
              'Leading through change',
              'Vision and strategy',
              'Inspiring others',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Personalized Development',
        description: 'Tailoring programs to individual strengths and needs.'
      },
      {
        heading: 'Measurement & Feedback',
        description: 'Tracking progress and adjusting programs based on results.'
      },
      {
        heading: 'Executive Sponsorship',
        description: 'Engaging senior leaders to champion development efforts.'
      },
    ],
  },
  {
    id: 'health-safety',
    category: 'specialized',
    icon: Shield,
    title: 'Health & Safety',
    description: 'Ensuring workplace safety protocols and employee well-being programs are in place and effective.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Risk Assessment',
            description: 'Identifying and mitigating workplace hazards.'
          },
          {
            heading: 'Policy Implementation',
            description: 'Developing and enforcing health and safety policies.'
          },
          {
            heading: 'Well-being Initiatives',
            description: 'Promoting physical and mental health programs.'
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Regulatory Compliance',
            description: '',
            list: [
              'OSHA standards',
              'Local health regulations',
              'Incident reporting',
            ],
          },
          {
            heading: 'Emergency Preparedness',
            description: '',
            list: [
              'Evacuation planning',
              'First aid training',
              'Crisis management',
            ],
          },
          {
            heading: 'Wellness Promotion',
            description: '',
            list: [
              'Health screenings',
              'Stress management',
              'Work-life balance',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Proactive Prevention',
        description: 'Identifying risks before they become incidents.'
      },
      {
        heading: 'Employee Involvement',
        description: 'Encouraging participation in safety programs.'
      },
      {
        heading: 'Continuous Training',
        description: 'Regularly updating safety knowledge and skills.'
      },
    ],
  },
  {
    id: 'global-remote',
    category: 'specialized',
    icon: Users,
    title: 'Global & Remote Workforce Management',
    description: 'Managing international HR operations and supporting remote employees effectively.',
    sections: [
      {
        title: 'Key Responsibilities',
        items: [
          {
            heading: 'Remote Policy Development',
            description: 'Creating guidelines for remote work and distributed teams.'
          },
          {
            heading: 'Cross-Border Compliance',
            description: 'Ensuring adherence to local labor laws and regulations.'
          },
          {
            heading: 'Virtual Engagement',
            description: 'Fostering connection and collaboration among remote employees.'
          },
        ],
      },
      {
        title: 'Essential Skills & Knowledge',
        items: [
          {
            heading: 'Technology Enablement',
            description: '',
            list: [
              'Collaboration tools',
              'Cybersecurity awareness',
              'Time zone management',
            ],
          },
          {
            heading: 'Cultural Sensitivity',
            description: '',
            list: [
              'Global communication',
              'Inclusive practices',
              'Local customs and holidays',
            ],
          },
          {
            heading: 'Performance Management',
            description: '',
            list: [
              'Remote goal setting',
              'Virtual feedback',
              'Outcome-based evaluation',
            ],
          },
        ],
      },
    ],
    bestPractices: [
      {
        heading: 'Flexible Work Arrangements',
        description: 'Offering options that support work-life balance.'
      },
      {
        heading: 'Clear Communication',
        description: 'Setting expectations and maintaining transparency.'
      },
      {
        heading: 'Global Mindset',
        description: 'Adapting HR practices to diverse international contexts.'
      },
    ],
  },
];