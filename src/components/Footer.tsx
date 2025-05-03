import React from 'react';
import { Briefcase, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-bold">HR Knowledge Hub</h3>
            </div>
            <p className="text-gray-300 mb-4">
              A comprehensive resource for HR professionals to understand the breadth and depth of expertise needed
              to excel in the field of Human Resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#core" className="text-gray-300 hover:text-white transition-colors">Core HR Areas</a>
              </li>
              <li>
                <a href="#specialized" className="text-gray-300 hover:text-white transition-colors">Specialized Knowledge</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">HR Certifications</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Career Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Industry Trends</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Best Practices</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} HR Knowledge Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;