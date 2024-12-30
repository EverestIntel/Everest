import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { QuestionList } from './CharacterForm/QuestionList';
import { AttributeList } from './AttributesPanel/AttributeList';
import { ResetButton } from './AttributesPanel/ResetButton';
import { GenerateButton } from './GenerateButton';
import { useCharacterForm } from '../../hooks/useCharacterForm';
import { useCharacterAttributes } from '../../hooks/useCharacterAttributes';

export const CharacterBuilder = () => {
  const { selections, handleSelection } = useCharacterForm();
  const { values, updateAttribute, resetAttributes } = useCharacterAttributes();

  return (
    <Card>
      <Section 
        title="Character Creation" 
        description="Design your character's traits and abilities"
        action={<GenerateButton />}
        className="p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100vh-14rem)]">
          <div className="flex flex-col h-full">
            <div className="mb-3">
              <h3 className="text-base font-medium text-electric-blue">Core Traits</h3>
              <p className="text-sm text-gray-500">Shape your character</p>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin">
              <QuestionList 
                selections={selections} 
                onSelect={handleSelection}
              />
            </div>
          </div>
          
          <div className="flex flex-col h-full">
            <div className="mb-3 flex justify-between items-start">
              <div>
                <h3 className="text-base font-medium text-electric-blue">Attributes</h3>
                <p className="text-sm text-gray-500">Balance your abilities</p>
              </div>
              <ResetButton onReset={resetAttributes} className="mt-[-4px]" />
            </div>
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin">
              <AttributeList 
                values={values} 
                onChange={updateAttribute}
              />
            </div>
          </div>
        </div>
      </Section>
    </Card>
  );
};