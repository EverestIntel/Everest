import React from 'react';

interface LevelBadgeProps {
  level: number;
  houseStyle: string;
}

export const LevelBadge: React.FC<LevelBadgeProps> = ({ level, houseStyle }) => (
  <div className={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-gradient-to-r ${houseStyle} text-white rounded-full shadow-sm`}>
    Level {level}
  </div>
);