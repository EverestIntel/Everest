import React from 'react';
import { DualAttributeSlider } from './DualAttributeSlider';
import { dualAttributes } from '../../../data/attributes';

interface AttributeListProps {
  values: Record<string, number>;
  onChange: (name: string, value: number) => void;
}

export const AttributeList: React.FC<AttributeListProps> = ({ 
  values, 
  onChange,
}) => {
  return (
    <div className="grid gap-2">
      {dualAttributes.map((attribute) => (
        <DualAttributeSlider
          key={attribute.leftAttribute.name}
          attribute={attribute}
          value={values[attribute.leftAttribute.name] || 50}
          onChange={(value) => onChange(attribute.leftAttribute.name, value)}
        />
      ))}
    </div>
  );
};