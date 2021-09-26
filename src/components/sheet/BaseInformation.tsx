import React, { FC, KeyboardEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import {
  Character,
  getAlignmentName,
  getAlignments,
} from '../../models';
import { baseRaceListSelector } from '../../state';
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
  const { abilityScores, alignment, name, race } = character;
  const races = useRecoilValue(baseRaceListSelector);

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
      <Field>
        <select
          name="race"
          value={race}
          onChange={e => updateCharacter({ race: parseInt(e.target.value ) })}
        >
          {races.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </Field>
      <Field width={120}>
        <select
          name="alignment"
          value={alignment}
          onChange={e => updateCharacter({ alignment: parseInt(e.target.value) })}
        >
          {getAlignments().map(a => (
            <option key={a} value={a}>
              {getAlignmentName(a)}
            </option>
          ))}
        </select>
        <label htmlFor="alignment">Alignment</label>
      </Field>
      <BaseAbilityScores
        raceId={race}
        abilityScores={abilityScores}
        updateCharacter={updateCharacter}
      />
    </InformationSection>
  );
};
