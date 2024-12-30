import React from 'react';
import { Character } from '../../types';
import { StatBar } from '../StatBar';
import { Shield, Mountain, Heart, Wind, Book } from 'lucide-react';
import { getStatStyles } from '../../utils/statStyles';

interface CharacterStatsOverlayProps {
  character: Character;
}

const STAT_ICONS = {
  stamina: Mountain,
  strength: Shield,
  charisma: Heart,
  agility: Wind,
  wisdom: Book
} as const;

export const CharacterStatsOverlay: React.FC<CharacterStatsOverlayProps> = ({ character }) => {
  const stats = Object.entries(character.stats).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
    Icon: STAT_ICONS[name as keyof typeof STAT_ICONS] || Shield,
    style: getStatStyles(name)
  }));

  // Calculate percentage with logarithmic scale for values over 10
  const getPercentage = (val: number) => {
    if (val <= 10) return (val / 10) * 100;
    return Math.min(100, 100 + Math.log10(val / 10) * 20);
  };

  return (
    <div className="p-4 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="grid grid-cols-5 gap-4">
        {stats.map(({ name, value, Icon, style }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${style.icon}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-white/50">{name}</span>
                <span className="text-xs font-medium text-white/70">{value}</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${style.gradient} transition-all duration-300`}
                  style={{ width: `${getPercentage(value)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};