import React from 'react';
import { useCharacter } from '../../providers/CharacterStoreProvider';

export const CharacterSummary: React.FC = () => {
  const { characterName, selections, attributes } = useCharacter();
  
  if (!characterName || !selections.some(s => s !== null)) {
    return null;
  }

  return (
    <div className="p-4 bg-white/50 rounded-lg border border-electric-blue/20">
      <h3 className="text-lg font-semibold text-electric-blue mb-2">{characterName}</h3>
      <div className="space-y-2 text-sm text-gray-600">
        {/* Display selected traits */}
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(attributes).map(([name, value]) => (
            <div key={name} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-electric-blue/40" />
              <span>{name}: {value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};