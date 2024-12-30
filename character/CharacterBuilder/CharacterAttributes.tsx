import React from 'react';
import { AttributeList } from '../AttributesPanel/AttributeList';
import { ResetButton } from '../AttributesPanel/ResetButton';
import { useCharacterAttributes } from '../../../hooks/useCharacterAttributes';

export const CharacterAttributes: React.FC = () => {
  const { values, updateAttribute, resetAttributes } = useCharacterAttributes();

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-sm font-semibold text-electric-blue mb-1">Character Balance</h3>
          <p className="text-xs text-gray-600">Fine-tune opposing traits</p>
        </div>
        <ResetButton onReset={resetAttributes} />
      </div>
      <div className="flex-1">
        <AttributeList 
          values={values} 
          onChange={updateAttribute}
        />
      </div>
    </div>
  );
};