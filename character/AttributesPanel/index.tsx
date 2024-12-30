import React from 'react';
import { AttributeList } from './AttributeList';
import { ResetButton } from './ResetButton';
import { useCharacterAttributes } from '../../../hooks/useCharacterAttributes';

export const AttributesPanel = () => {
  const { values, updateAttribute, resetAttributes } = useCharacterAttributes();

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-electric-blue mb-2">Character Attributes</h3>
        <p className="text-gray-600">Fine-tune your character's abilities</p>
      </div>

      <AttributeList values={values} onChange={updateAttribute} />
      
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          All attributes default to 50
        </div>
        <ResetButton onReset={resetAttributes} />
      </div>
    </div>
  );
};