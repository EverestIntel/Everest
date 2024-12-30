import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Star, 
  Sun, 
  Crown,
  GemIcon
} from 'lucide-react';

interface LevelEmblemProps {
  level: number;
  houseStyle: string;
}

export const LevelEmblem: React.FC<LevelEmblemProps> = ({ level, houseStyle }) => {
  const getEmblem = () => {
    if (level >= 50) return <Crown className="w-4 h-4" />;
    if (level >= 40) return <Sun className="w-4 h-4" />;
    if (level >= 30) return <GemIcon className="w-4 h-4" />;
    if (level >= 20) return <Star className="w-4 h-4" />;
    if (level >= 10) return <Flame className="w-4 h-4" />;
    return <Sparkles className="w-4 h-4" />;
  };

  const getRankTitle = () => {
    if (level >= 50) return 'Archmage';
    if (level >= 40) return 'Master';
    if (level >= 30) return 'Expert';
    if (level >= 20) return 'Adept';
    if (level >= 10) return 'Apprentice';
    return 'Novice';
  };

  return (
    <div className="relative group">
      <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full 
                      bg-gradient-to-r ${houseStyle} text-white`}>
        {getEmblem()}
        <span className="text-xs font-medium">Level {level}</span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                    opacity-0 group-hover:opacity-100 transition-opacity
                    pointer-events-none">
        <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          {getRankTitle()}
        </div>
      </div>
    </div>
  );
};