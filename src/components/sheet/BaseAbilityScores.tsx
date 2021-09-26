import React, { FC } from 'react';
import styled from 'styled-components';

import { Ability, AbilityScores, Character } from '../../models';
import { Field } from '../common';

const AbilityScoresWrapper = styled.div`
  display: flex;
`;

export interface BaseAbilityScoresProps {
  abilityScores: AbilityScores;
  updateCharacter: (data: Partial<Character>) => void;
}

export const BaseAbilityScores: FC<BaseAbilityScoresProps> = ({
  abilityScores,
  updateCharacter,
}) => {
  const onChange = (ability: Ability, newValue: number) => {
    updateCharacter({
      abilityScores: {
        ...abilityScores,
        [ability]: newValue,
      },
    });
  };

  return (
    <AbilityScoresWrapper>
      {Object.entries(abilityScores).map(([a, score]) => (
        <Field key={a} width={40}>
          <select onChange={e => onChange(a as Ability, parseInt(e.target.value))}>
            {Array.from({ length: 18 }, (_, i) => i + 1).filter(n => n > 6).map(n => (
              <option key={n} value={n} selected={n === score}>
                {n}
              </option>
            ))}
          </select>
          <label htmlFor={a}>{a.substr(0, 3).toUpperCase()}</label>
        </Field>
      ))}
    </AbilityScoresWrapper>
  );
};
