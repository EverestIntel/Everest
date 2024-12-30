import React from 'react';

const LEVEL_TIERS = [
  { level: "Novice (1-10)", xp: "100-1,000", color: "from-emerald-500 to-green-400" },
  { level: "Apprentice (11-20)", xp: "1,100-2,000", color: "from-green-500 to-teal-400" },
  { level: "Adept (21-30)", xp: "2,100-3,000", color: "from-teal-500 to-emerald-400" },
  { level: "Master (31-40)", xp: "3,100-4,000", color: "from-emerald-600 to-green-500" },
  { level: "Archmage (41-50)", xp: "4,100-5,000", color: "from-green-600 to-teal-500" }
];

export const LevelChart: React.FC = () => (
  <div className="p-6 rounded-lg bg-white/5 border border-white/10">
    <h3 className="text-lg font-medium text-white/90 mb-4">Experience Requirements</h3>
    <div className="space-y-4">
      {LEVEL_TIERS.map(({ level, xp, color }) => (
        <div key={level} className="relative">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-white/90">{level}</span>
            <span className="text-white/70">{xp} XP</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${color}`} 
                 style={{ width: `${(parseInt(level) / 50) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);