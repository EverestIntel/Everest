import React from 'react';
import { Option } from './Option';
import { CharacterQuestion } from '../../types/character';

interface FormSectionProps {
  question: CharacterQuestion;
  selected: string | null;
  onSelect: (value: string) => void;
}

export const FormSection: React.FC<FormSectionProps> = ({
  question,
  selected,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {question.options.map((option, index) => (
        <Option
          key={index}
          label={option.label}
          value={option.value}
          icon={option.icon}
          selected={selected === option.value}
          onSelect={() => onSelect(option.value)}
        />
      ))}
    </div>
  );
};