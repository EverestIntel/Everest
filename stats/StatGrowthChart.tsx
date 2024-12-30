import React from 'react';
import { getStatStyles } from '../../utils/statStyles';

const STAT_GROWTH_DATA = [
  { stat: "Stamina", chance: 60 },
  { stat: "Wisdom", chance: 60 },
  { stat: "Strength", chance: 40 },
  { stat: "Charisma", chance: 35 },
  { stat: "Agility", chance: 30 }
];

export const StatGrowthChart: React.FC = () => (
  <div className="p-6 rounded-lg bg-white/5 border border-white/10">
    <h3 className="text-lg font-medium text-white/90 mb-4">Stat Growth Chances</h3>
    <div className="space-y-4">
      {STAT_GROWTH_DATA.map(({ stat, chance }) => {
        const style = getStatStyles(stat.toLowerCase());
        return (
          <div key={stat} className="relative">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white/90">{stat}</span>
              <span className="text-white/70">{chance}% Growth Chance</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${style.gradient}`} 
                   style={{ width: `${chance}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);