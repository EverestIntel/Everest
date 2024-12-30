import React from 'react';
import { AttributeType } from '../../../types/character';

interface AttributeSliderProps {
  attribute: AttributeType;
  value: number;
  onChange: (value: number) => void;
  compact?: boolean;
}

export const AttributeSlider: React.FC<AttributeSliderProps> = ({
  attribute,
  value,
  onChange,
  compact = false
}) => {
  const { name, icon: Icon } = attribute;

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg border border-electric-blue/20 
      hover:border-electric-blue/40 transition-colors">
      <div className="flex items-center gap-1.5 min-w-[100px]">
        <Icon size={14} className="text-electric-blue" />
        <span className="text-xs font-medium text-electric-blue truncate">{name}</span>
      </div>
      
      <div className="flex-1 flex items-center gap-2">
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-2.5
            [&::-webkit-slider-thumb]:h-2.5
            [&::-webkit-slider-thumb]:bg-electric-blue
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:duration-200
            [&::-webkit-slider-thumb]:hover:scale-110"
        />
        <span className="text-xs font-medium text-electric-blue w-8 text-right">
          {value}
        </span>
      </div>
    </div>
  );
};