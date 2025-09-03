import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, HelpCircle, Lock, Eye } from 'lucide-react';
import type { Module } from '../data/courses';

interface CurriculumSectionProps {
  curriculum: Module[];
}

const CurriculumSection: React.FC<CurriculumSectionProps> = ({ curriculum }) => {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set(['module-1']));

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const getTypeIcon = (type: string, preview?: boolean) => {
    switch (type) {
      case 'video':
        return <Play className="h-4 w-4" />;
      case 'article':
        return <FileText className="h-4 w-4" />;
      case 'quiz':
        return <HelpCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const totalLessons = curriculum.reduce((acc, module) => acc + module.lessons.length, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Course Curriculum</h3>
        <div className="text-sm text-gray-600">
          {curriculum.length} modules • {totalLessons} lessons
        </div>
      </div>

      <div className="space-y-4">
        {curriculum.map((module) => (
          <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {expandedModules.has(module.id) ? (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                )}
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{module.title}</h4>
                  <p className="text-sm text-gray-600">
                    {module.lessons.length} lessons • {module.duration}
                  </p>
                </div>
              </div>
            </button>

            {expandedModules.has(module.id) && (
              <div className="bg-white">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="text-gray-600">
                        {getTypeIcon(lesson.type, lesson.preview)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-gray-900 truncate">{lesson.title}</h5>
                        <p className="text-sm text-gray-600">{lesson.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {lesson.preview ? (
                        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                          <Eye className="h-4 w-4" />
                          <span>Preview</span>
                        </button>
                      ) : (
                        <Lock className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumSection;