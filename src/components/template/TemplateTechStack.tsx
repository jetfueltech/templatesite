import React from 'react';
import { Code2, Database, Layout } from 'lucide-react';

interface TechItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

interface TemplateTechStackProps {
  technologies: string[];
}

export default function TemplateTechStack({ technologies }: TemplateTechStackProps) {
  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react':
      case 'vue':
      case 'typescript':
        return <Code2 className="w-5 h-5" />;
      case 'supabase':
      case 'postgresql':
        return <Database className="w-5 h-5" />;
      default:
        return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {technologies.map((tech) => (
          <div key={tech} className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
            {getTechIcon(tech)}
            <span className="text-gray-300">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}