import React, { FC, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';

import {
  Character,
  getAlignmentName,
  getAlignments,
} from '../../models';
import { Field } from '../common';
import { BaseAbilityScores } from './BaseAbilityScores';

const InformationSection = styled.section`
  display: flex;
`;

export interface BaseInformationProps {
  character: Character;
  updateCharacter: (data: Partial<Character>) => void;
}

export const BaseInformation: FC<BaseInformationProps> = ({
  character,
  updateCharacter,
}) => {
  const { abilityScores, alignment, name } = character;
  const [nameVal, setNameVal] = useState(name);

  const handleKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>, data: Partial<Character>) => {
    if (key === 'Enter') updateCharacter(data);
  };

  return (
    <InformationSection>
      <Field unsaved={name !== nameVal} width={200}>
        <input
          type="text"
          name="name"
          placeholder="Character name"
          value={nameVal}
          onChange={e => setNameVal(e.target.value)}
          onKeyDown={e => handleKeyDown(e, { name: (e.target as HTMLInputElement).value })}
        />
        <label htmlFor="name">Name</label>
      </Field>
      <Field width={120}>
        <select
          name="alignment"
          onChange={e => updateCharacter({ alignment: parseInt(e.target.value) })}
        >
          {getAlignments().map(a => (
            <option key={a} value={a} selected={a === alignment}>
              {getAlignmentName(a)}
            </option>
          ))}
        </select>
        <label htmlFor="alignment">Alignment</label>
      </Field>
      <BaseAbilityScores abilityScores={abilityScores} updateCharacter={updateCharacter} />
    </InformationSection>
  );
};
