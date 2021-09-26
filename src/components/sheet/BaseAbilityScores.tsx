import React, { FC, useState } from 'react';
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
    abilityScoreChoiceIncrease: choiceMod,
    abilityScores: mods,
  } = useRecoilValue(raceState(raceId));

  const [choice, setChoice] = useState<Ability | null>(choiceMod ? 'str' : null);

  const onChange = (ability: Ability, newValue: number) => {
    updateCharacter({
      abilityScores: {
        ...abilityScores,
        [ability]: newValue,
      },
    });
  };

  const getModForAbility = (ability: Ability): number => (
    choiceMod
      ? choice === ability ? choiceMod : 0
      : mods ? mods[ability] || 0 : 0
  );

  const getOptionsForAbility = (ability: Ability) => {
    const array = Array.from({ length: 18 }, (_, n) => n + 1).filter(n => n > 6);
    const mod = getModForAbility(ability);
    return array.map(n => n + mod);
  };

  const getModString = (mod: number) => (
    mod === 0
      ? ''
      : mod > 0 ? `+${mod}` : mod
  );

  return (
    <AbilityScoresWrapper>
      {Object.entries(abilityScores).map(([a, score]) => (
        <Field key={a} width={40}>
          <select
            name={a}
            value={score}
            onChange={e => onChange(a as Ability, parseInt(e.target.value))}
          >
            {getOptionsForAbility(a as Ability).map(n => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <label htmlFor={a} onClick={() => choiceMod && setChoice(a as Ability)}>
            {`${a.toUpperCase()} ${getModString(getModForAbility(a as Ability))}`}
          </label>
        </Field>
      ))}
    </AbilityScoresWrapper>
  );
};
