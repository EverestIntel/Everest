import React from 'react';
import { CharacterQuestion } from '../../types/character';

interface QuestionCardProps {
  question: CharacterQuestion;
  selected: string | null;
  onSelect: (value: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selected,
  onSelect,
}) => {
  return (
    <div className="rounded-lg border border-electric-blue/10 p-4">
      <h4 className="text-lg font-medium text-electric-blue mb-4">{question.question}</h4>
      
      <div className="grid grid-cols-2 gap-3">
        {question.options.map((option) => {
          const Icon = option.icon;
          const isSelected = selected === option.value;
          
          return (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className={`
                flex items-center gap-3 p-3 rounded-lg border
                transition-all duration-300 text-left
                ${isSelected 
                  ? 'border-electric-blue bg-electric-blue/5 text-electric-blue' 
                  : 'border-gray-200 hover:border-electric-blue/30 text-gray-600 hover:bg-electric-blue/5'
                }
              `}
            >
              <Icon size={20} className={isSelected ? 'text-electric-blue' : 'text-gray-400'} />
              <span className="text-sm">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};