import React from 'react';
import { Wand2 } from 'lucide-react';
import { useStoryGeneration } from '../../hooks/useStoryGeneration';
import { useCharacter } from '../../providers/CharacterStoreProvider';

export const GenerateButton: React.FC = () => {
  const { generateStory, isGenerating } = useStoryGeneration();
  const { hasAnySelection } = useCharacter();

  const handleClick = async () => {
    if (!hasAnySelection || isGenerating) return;
    try {
      await generateStory();
    } catch (error) {
      console.error('Failed to generate story:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isGenerating || !hasAnySelection}
      className={`
        flex items-center gap-2 px-6 py-2.5 rounded-lg transform transition-all duration-300
        ${!hasAnySelection 
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
          : 'bg-gradient-to-r from-electric-blue to-accent-orange text-white hover:scale-105'
        }
        disabled:opacity-50 disabled:transform-none
      `}
    >
      <Wand2 className="w-5 h-5" />
      <span>
        {isGenerating 
          ? 'Generating...' 
          : !hasAnySelection 
            ? 'Select at least one trait' 
            : 'Generate Story'}
      </span>
    </button>
  );
};