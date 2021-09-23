import React, { FC, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';

import {
  Ability,
  Character,
  getAlignmentName,
  getAlignments,
  PremadeCharacter,
} from '../../models';
import { Field } from '../common';

const InformationSection = styled.section`
  display: flex;
`;

const AbilityScoresWrapper = styled.div`
  display: flex;
  
  input {
    text-align: center;
  }
`;

export interface BaseInformationProps {
  character: Character;
  updateCharacter: (data: Partial<Character>) => void;
}

export const BaseInformation: FC<BaseInformationProps> = ({
  character,
  updateCharacter,
}) => {
  const { abilityScores, alignment, name } = character as PremadeCharacter;
  const [nameVal, setNameVal] = useState(name);

  const handleKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>, data: Partial<Character>) => {
    if (key === 'Enter') updateCharacter(data);
  };

  const handleAbilityScoreKeyDown = (
    { key }: KeyboardEvent<HTMLInputElement>,
    abilityToChange: Ability,
  ) => {
    if (key === 'ArrowUp' || key === 'ArrowRight') {
      updateCharacter({
        abilityScores: {
          ...abilityScores,
          [abilityToChange]: abilityScores[abilityToChange] + 1,
        },
      });
    }

    if (key === 'ArrowDown' || key === 'ArrowLeft') {
      updateCharacter({
        abilityScores: {
          ...abilityScores,
          [abilityToChange]: abilityScores[abilityToChange] - 1,
        },
      });
    }
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
      <AbilityScoresWrapper>
        {Object.entries(abilityScores).map(([a, score]) => (
          <Field key={a} width={20}>
            <input
              type="numeric"
              name={a}
              value={score}
              onKeyDown={e => handleAbilityScoreKeyDown(e, a as Ability)}
            />
            <label htmlFor={a}>{a.substr(0, 3).toUpperCase()}</label>
          </Field>
        ))}
      </AbilityScoresWrapper>
    </InformationSection>
  );
};
