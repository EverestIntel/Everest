import React from 'react';
import { CharacterQuestion } from '../../../types/character';

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
    <div className="rounded-lg border border-electric-blue/10 p-2 hover:border-electric-blue/20 
      transition-all duration-300">
      <h4 className="text-xs font-medium text-electric-blue mb-2">{question.question}</h4>
      
      <div className="grid grid-cols-2 gap-1.5">
        {question.options.map((option) => {
          const Icon = option.icon;
          const isSelected = selected === option.value;
          
          return (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className={`
                flex items-center gap-1.5 px-2 py-1 rounded border text-left
                transition-all duration-200 group
                ${isSelected 
                  ? 'border-accent-orange bg-accent-orange/5 text-accent-orange' 
                  : 'border-gray-200 hover:border-accent-orange/30 text-gray-600 hover:bg-accent-orange/5'
                }
              `}
              aria-pressed={isSelected}
            >
              <Icon 
                size={11} 
                className={`
                  flex-shrink-0 transition-colors duration-200
                  ${isSelected ? 'text-accent-orange' : 'text-gray-400 group-hover:text-accent-orange/60'}
                `} 
              />
              <span className="text-[11px] leading-tight truncate">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};