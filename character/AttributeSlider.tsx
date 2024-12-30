import React from 'react';
import { AttributeType } from '../../types/character';

interface AttributeSliderProps {
  attribute: AttributeType;
  value: number;
  onChange: (value: number) => void;
}

export const AttributeSlider: React.FC<AttributeSliderProps> = ({
  attribute,
  value,
  onChange,
}) => {
  const { name, description, icon: Icon, impact } = attribute;

  return (
    <div className="flex gap-4 p-4 rounded-lg border border-electric-blue/20 hover:border-electric-blue/40 transition-colors">
      <div className="flex flex-col items-center w-24">
        <Icon size={24} className="text-electric-blue mb-2" />
        <span className="text-lg font-semibold text-electric-blue">{value}</span>
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-electric-blue">{name}</h4>
        </div>
        
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:bg-electric-blue
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:duration-200
            [&::-webkit-slider-thumb]:hover:scale-110"
        />
        
        <div className="mt-2 space-y-1">
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-xs text-gray-500 italic">{impact}</p>
        </div>
      </div>
    </div>
  );
};