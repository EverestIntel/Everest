import React from 'react';
import { QuestionList } from '../CharacterForm/QuestionList';
import { useCharacterForm } from '../../../hooks/useCharacterForm';

export const CharacterTraits: React.FC = () => {
  const { selections, handleSelection } = useCharacterForm();

  return (
    <div className="space-y-3">
      <div className="mb-2">
        <h3 className="text-sm font-semibold text-electric-blue">Core Traits</h3>
        <p className="text-xs text-gray-600">Define your character's fundamental nature</p>
      </div>
      <QuestionList 
        selections={selections} 
        onSelect={handleSelection}
      />
    </div>
  );
};