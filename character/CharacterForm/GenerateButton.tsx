import React from 'react';
import { Wand2 } from 'lucide-react';

export const GenerateButton = () => {
  return (
    <div className="mt-6 flex justify-end">
      <button className="flex items-center gap-2 px-6 py-3 bg-accent-orange text-white rounded-lg
        transform hover:scale-105 transition-all duration-300">
        <Wand2 size={20} />
        Generate Character
      </button>
    </div>
  );
};