import React, { FC, KeyboardEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import {
  Character,
  getAlignmentName,
  getAlignments,
} from '../../models';
import { BaseAbilityScores } from './BaseAbilityScores';
import { CharacterRace } from './CharacterRace';
import { Field } from './Field';

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

  const [nameVal, setNameVal] = useState(name);

  const changeRace = useCallback((newRaceId: number) => (
    updateCharacter({ race: newRaceId })
  ), [updateCharacter]);

  const handleKeyDown = useCallback((
    { key }: KeyboardEvent<HTMLInputElement>,
    data: Partial<Character>,
  ) => {
    if (key === 'Enter') updateCharacter(data);
  }, [updateCharacter]);

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
      <CharacterRace raceId={race} onChange={changeRace} />
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
