import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { Ability, AbilityScores, Character } from '../../models';
import { raceState } from '../../state';
import { Field } from '../common';

const AbilityScoresWrapper = styled.div`
  display: flex;
`;

export interface BaseAbilityScoresProps {
  raceId: number;
  abilityScores: AbilityScores;
  updateCharacter: (data: Partial<Character>) => void;
}

export const BaseAbilityScores: FC<BaseAbilityScoresProps> = ({
  raceId,
  abilityScores,
  updateCharacter,
}) => {
  const {
    abilityScores: racialAbilityScoreIncreases,
  } = useRecoilValue(raceState(raceId));

  const onChange = (ability: Ability, newValue: number) => {
    updateCharacter({
      abilityScores: {
        ...abilityScores,
        [ability]: newValue,
      },
    });
  };

  const getModForAbility = (ability: Ability): number => (
    racialAbilityScoreIncreases ? racialAbilityScoreIncreases[ability] || 0 : 0
  );

  const getIncreaseAsString = (increase: number) => (
    increase === 0
      ? ''
      : increase > 0 ? `+${increase}` : increase
  );

  return (
    <AbilityScoresWrapper>
      {(Object.entries(abilityScores) as [Ability, number][]).map(([ability, score]) => (
        <Field key={ability} width={40}>
          <select
            name={ability}
            value={score}
            onChange={e => onChange(ability, parseInt(e.target.value))}
          >
            {Array.from({ length: 18 }, (_, n) => n + 1).filter(n => n > 6).map(n => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <label htmlFor={ability}>
            {`${ability.toUpperCase()} ${getIncreaseAsString(getModForAbility(ability))}`}
          </label>
        </Field>
      ))}
    </AbilityScoresWrapper>
  );
};
