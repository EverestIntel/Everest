import React from 'react';
import { LucideIcon } from 'lucide-react';

interface OptionProps {
  label: string;
  value: string;
  icon: LucideIcon;
  selected: boolean;
  onSelect: () => void;
}

export const Option: React.FC<OptionProps> = ({
  label,
  icon: Icon,
  selected,
  onSelect,
}) => {
  return (
    <button
      onClick={onSelect}
      className={`
        p-6 rounded-lg border border-electric-blue
        flex flex-col items-center gap-4 text-center
        transition-all duration-300 transform hover:-translate-y-1
        ${selected 
          ? 'bg-electric-blue text-white' 
          : 'bg-transparent text-electric-blue hover:bg-electric-blue/5'
        }
      `}
    >
      <Icon size={32} className="transition-transform duration-300 transform group-hover:scale-110" />
      <span className="font-medium">{label}</span>
    </button>
  );
};