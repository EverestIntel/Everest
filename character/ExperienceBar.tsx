import React from 'react';
import { Shield } from 'lucide-react';

interface ExperienceBarProps {
  level: number;
  currentXP: number;
  requiredXP: number;
  showDetails?: boolean;
}

export const ExperienceBar: React.FC<ExperienceBarProps> = ({
  level,
  currentXP,
  requiredXP,
  showDetails = true
}) => {
  const progress = (currentXP / requiredXP) * 100;
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        {showDetails && (
          <>
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-lg bg-emerald-500/10">
                <Shield className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-white/90">Level {level}</span>
            </div>
            <span className="text-xs text-white/70">
              {currentXP.toLocaleString()} / {requiredXP.toLocaleString()} XP
            </span>
          </>
        )}
      </div>
      
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-green-400 
                     transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] 
                          bg-[length:20px_20px] animate-[shine_1s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};