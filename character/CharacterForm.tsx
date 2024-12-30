import React from 'react';
import { QuestionCard } from './QuestionCard';
import { useCharacterForm } from '../../hooks/useCharacterForm';
import { characterQuestions } from '../../data/characterQuestions';
import { Wand2 } from 'lucide-react';

export const CharacterForm = () => {
  const { selections, handleSelection } = useCharacterForm();

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-electric-blue mb-2">Character Traits</h3>
        <p className="text-gray-600">Define your character's core aspects</p>
      </div>

      <div className="space-y-6 max-h-[calc(100vh-16rem)] overflow-y-auto pr-4
        scrollbar-thin scrollbar-thumb-electric-blue/20 scrollbar-track-transparent">
        {characterQuestions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            selected={selections[index]}
            onSelect={(value) => handleSelection(index, value)}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button className="flex items-center gap-2 px-6 py-3 bg-accent-orange text-white rounded-lg
          transform hover:scale-105 transition-all duration-300">
          <Wand2 size={20} />
          Generate Character
        </button>
      </div>
    </div>
  );
};