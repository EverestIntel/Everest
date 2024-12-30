import React from 'react';
import { QuestionCard } from './QuestionCard';
import { characterQuestions } from '../../../data/characterQuestions';

interface QuestionListProps {
  selections: (string | null)[];
  onSelect: (index: number, value: string) => void;
}

export const QuestionList: React.FC<QuestionListProps> = ({ 
  selections, 
  onSelect,
}) => {
  return (
    <div className="grid gap-2">
      {characterQuestions.map((question, index) => (
        <QuestionCard
          key={index}
          question={question}
          selected={selections[index]}
          onSelect={(value) => onSelect(index, value)}
        />
      ))}
    </div>
  );
};