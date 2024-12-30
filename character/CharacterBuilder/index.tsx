import React from 'react';
import { Card } from '../../ui/Card';
import { CharacterTraits } from './CharacterTraits';
import { CharacterAttributes } from './CharacterAttributes';

export const CharacterBuilder: React.FC = () => {
  return (
    <Card className="h-full bg-white/95">
      <div className="p-4 h-full flex flex-col">
        <div className="mb-3">
          <h2 className="text-base font-bold text-electric-blue">Character Creation</h2>
          <p className="text-xs text-gray-600">Shape your character's destiny</p>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-electric-blue/20 
          scrollbar-track-transparent">
          <div className="space-y-4">
            <CharacterTraits />
            <CharacterAttributes />
          </div>
        </div>
      </div>
    </Card>
  );
};