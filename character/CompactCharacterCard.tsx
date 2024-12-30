import React from 'react';
import { Character } from '../../types';
import { StatBar } from '../StatBar';
import { LevelEmblem } from './LevelEmblem';
import { ExperienceBar } from './ExperienceBar';
import { houseStyles } from '../../utils/houseStyles';

interface CompactCharacterCardProps {
  character: Character;
  isSelected: boolean;
  onSelect: (character: Character) => void;
  progress: {
    level: number;
    experience: number;
    promptCount: number;
  };
}

export const CompactCharacterCard: React.FC<CompactCharacterCardProps> = ({
  character,
  isSelected,
  onSelect,
  progress,
}) => {
  const houseStyle = houseStyles[character.house] || houseStyles.Rangers;
  const maxExperience = progress.level * 100;
  
  return (
    <div
      className={`relative transition-all duration-300 cursor-pointer rounded-xl p-3
                  backdrop-blur-sm border ${
                    isSelected 
                      ? 'bg-white/10 border-white/20' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
      onClick={() => onSelect(character)}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-sm font-medium text-white/90">{character.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/70">{character.role}</span>
            <span className="inline-block w-1 h-1 rounded-full bg-white/30" />
            <span className="text-xs font-medium text-white/70">
              {character.house}
            </span>
          </div>
        </div>
        <LevelEmblem level={progress.level} houseStyle={houseStyle.primary} />
      </div>

      <ExperienceBar 
        level={progress.level}
        currentXP={progress.experience || 0}
        requiredXP={maxExperience}
        showDetails={false}
      />
      
      <div className="mt-2 space-y-1.5">
        <StatBar label="Stamina" value={character.stats.stamina} gradient={houseStyle.primary} />
        <StatBar label="Strength" value={character.stats.strength} gradient={houseStyle.primary} />
        <StatBar label="Wisdom" value={character.stats.wisdom} gradient={houseStyle.primary} />
      </div>
    </div>
  );
};