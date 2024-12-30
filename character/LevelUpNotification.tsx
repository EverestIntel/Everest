import React from 'react';
import { Sparkles } from 'lucide-react';

interface LevelUpNotificationProps {
  level: number;
  onClose: () => void;
}

export const LevelUpNotification: React.FC<LevelUpNotificationProps> = ({ level, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
    <div className="relative bg-gradient-to-br from-emerald-900/90 to-green-900/90 p-8 rounded-lg border border-emerald-400/30 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 blur-xl" />
      <div className="relative">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-gradient-to-br from-emerald-500 to-green-400">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
          Level Up!
        </h2>
        
        <p className="text-lg text-center text-white/90 mb-6">
          You've reached level {level}
        </p>
        
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-400 
                   text-white font-medium rounded-lg hover:from-emerald-600 hover:to-green-500 
                   transition-all duration-200"
        >
          Continue Journey
        </button>
      </div>
    </div>
  </div>
);