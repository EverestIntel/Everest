import React from 'react';
import { DualAttribute } from '../../../types/character';

interface DualAttributeSliderProps {
  attribute: DualAttribute;
  value: number;
  onChange: (value: number) => void;
}

export const DualAttributeSlider: React.FC<DualAttributeSliderProps> = ({
  attribute,
  value,
  onChange,
}) => {
  const { leftAttribute, rightAttribute, impact } = attribute;
  const LeftIcon = leftAttribute.icon;
  const RightIcon = rightAttribute.icon;

  return (
    <div className="rounded-lg border border-electric-blue/10 p-2 hover:border-electric-blue/20 
      transition-all duration-300">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-1">
          <div className="p-0.5 bg-electric-blue/10 rounded">
            <LeftIcon size={10} className="text-electric-blue" />
          </div>
          <span className="text-xs font-medium text-electric-blue">{leftAttribute.name}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs font-medium text-accent-orange">{rightAttribute.name}</span>
          <div className="p-0.5 bg-accent-orange/10 rounded">
            <RightIcon size={10} className="text-accent-orange" />
          </div>
        </div>
      </div>

      <div className="relative mb-1.5">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-1 bg-gradient-to-r from-electric-blue to-accent-orange 
            rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-3.5
            [&::-webkit-slider-thumb]:h-3.5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-gradient-to-br
            [&::-webkit-slider-thumb]:from-white
            [&::-webkit-slider-thumb]:to-gray-50
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-electric-blue
            [&::-webkit-slider-thumb]:shadow-[0_0_4px_rgba(0,102,255,0.3)]
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-200
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-webkit-slider-thumb]:hover:shadow-[0_0_6px_rgba(0,102,255,0.4)]"
        />
      </div>

      <div className="flex justify-between text-[9px] mb-1">
        <span className="text-electric-blue/70">{leftAttribute.description}</span>
        <span className="text-accent-orange/70">{rightAttribute.description}</span>
      </div>

      <div className="text-[8px] text-gray-500 italic text-center border-t border-gray-100 pt-0.5">
        {impact}
      </div>
    </div>
  );
};