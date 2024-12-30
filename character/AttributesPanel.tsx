import React from 'react';
import { AttributeSlider } from './AttributeSlider';
import { useCharacterAttributes } from '../../hooks/useCharacterAttributes';
import { attributes } from '../../data/attributes';

export const AttributesPanel = () => {
  const { values, updateAttribute } = useCharacterAttributes();

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-electric-blue mb-2">Character Attributes</h3>
        <p className="text-gray-600">Fine-tune your character's abilities</p>
      </div>

      <div className="space-y-4 max-h-[calc(100vh-16rem)] overflow-y-auto pr-4
        scrollbar-thin scrollbar-thumb-electric-blue/20 scrollbar-track-transparent">
        {attributes.map((attribute) => (
          <AttributeSlider
            key={attribute.name}
            attribute={attribute}
            value={values[attribute.name]}
            onChange={(value) => updateAttribute(attribute.name, value)}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          All attributes default to 50
        </div>
        <button className="px-6 py-2 border border-electric-blue text-electric-blue rounded-lg
          hover:bg-electric-blue hover:text-white transition-all duration-300">
          Reset Attributes
        </button>
      </div>
    </div>
  );
};