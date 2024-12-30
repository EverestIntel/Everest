import { useCallback } from 'react';
import { useCharacter } from '../../../providers/CharacterStoreProvider';
import { useStory } from '../../../hooks/useStory';
import { useToast } from '../../../hooks/useToast';

export const useGenerateButton = () => {
  const { selections, attributes, hasAnySelection } = useCharacter();
  const { startNewStory } = useStory();
  const { showToast } = useToast();

  const handleGenerate = useCallback(async () => {
    if (!hasAnySelection) {
      showToast('Please select at least one character trait', 'error');
      return;
    }

    try {
      await startNewStory({ 
        selections, 
        attributes 
      });
    } catch (error) {
      console.error('Story generation error:', error);
      if (error instanceof Error) {
        showToast(error.message, 'error');
      } else {
        showToast('Failed to generate story. Please try again.', 'error');
      }
    }
  }, [selections, attributes, hasAnySelection, startNewStory, showToast]);

  const buttonState = {
    text: !hasAnySelection 
      ? 'Select at least one trait'
      : 'Generate Story',
    disabled: !hasAnySelection,
    className: !hasAnySelection
      ? 'bg-gray-200 text-gray-500'
      : 'bg-gradient-to-r from-electric-blue to-accent-orange text-white hover:scale-105'
  };

  return {
    handleGenerate,
    buttonState
  };
};