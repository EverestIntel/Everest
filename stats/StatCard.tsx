import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  gradient 
}) => (
  <div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-white/90">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
      {value}
    </div>
  </div>
);