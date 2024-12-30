import React from 'react';
import { QuestionList } from './QuestionList';
import { GenerateButton } from './GenerateButton';
import { useCharacterForm } from '../../../hooks/useCharacterForm';

export const CharacterForm = () => {
  const { selections, handleSelection } = useCharacterForm();

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-electric-blue mb-2">Character Traits</h3>
        <p className="text-gray-600">Define your character's core aspects</p>
      </div>

      <QuestionList selections={selections} onSelect={handleSelection} />
      <GenerateButton />
    </div>
  );
};