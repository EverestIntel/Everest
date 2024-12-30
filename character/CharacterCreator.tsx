import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { CharacterForm } from './CharacterForm';
import { AttributesPanel } from './AttributesPanel';

export const CharacterCreator = () => {
  return (
    <Section className="p-8">
      <div className="w-full max-w-7xl flex gap-8">
        <Card className="flex-1">
          <CharacterForm />
        </Card>
        <Card className="flex-1">
          <AttributesPanel />
        </Card>
      </div>
    </Section>
  );
};