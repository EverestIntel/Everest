import React from 'react';
import { Wand2 } from 'lucide-react';
import { useGenerateButton } from './useGenerateButton';

export const GenerateButton: React.FC = () => {
  const { handleGenerate, buttonState } = useGenerateButton();

  return (
    <button
      onClick={handleGenerate}
      disabled={buttonState.disabled}
      className={`
        flex items-center gap-2 px-6 py-2.5 rounded-lg transform transition-all duration-300
        ${buttonState.className}
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
      `}
    >
      <Wand2 className={`w-5 h-5 ${buttonState.disabled ? 'text-gray-400' : 'text-white'}`} />
      <span>{buttonState.text}</span>
    </button>
  );
};