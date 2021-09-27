import React, { FC } from 'react';

import { Ability, AbilityScores, Build, Race } from '../../../models';
import { AbilityScoreCell } from './AbilityScoreCell';

export interface AbilityScoreCellArrayProps {
  abilityScores: AbilityScores;
  abilityScoreIncreases: Record<number | string, string>;
  level: number;
  race: Race;
  updateBuild: (data: Partial<Build>) => void;
}

export const AbilityScoreCellArray: FC<AbilityScoreCellArrayProps> = ({
  abilityScores,
  abilityScoreIncreases,
  level,
  race,
  updateBuild,
}) => {
  const {
    abilityScoreChoiceIncrease: racialLevelOneIncrease = 0,
    abilityScores: racialAbilityScoreIncreases = {},
  } = race;

  const changeAbilityScoreIncrease = (ability: Ability): void => {
    updateBuild({
      abilityScoreIncreases: {
        ...abilityScoreIncreases,
        [level]: ability,
      },
    });
  };

  const calculateAbilityScore = (ability: Ability): number => {
    const levelOneIncrease = abilityScoreIncreases[1] === ability && racialLevelOneIncrease || 0;
    const regularIncreases = [4, 8, 12, 16, 20].filter(n => n <= level).filter(key => (
      abilityScoreIncreases[key.toString()] === ability
    )).length;

    const racialAbilityIncrease = racialAbilityScoreIncreases[ability] || 0;

    return abilityScores[ability] + racialAbilityIncrease + levelOneIncrease + regularIncreases;
  };

  const hasBonus = (ability: Ability): boolean => {
    if (level === 1) {
      const racial = racialAbilityScoreIncreases[ability];
      if (racial && racial > 0) return true;
    }

    return false;
  };

  const hasPenalty = (ability: Ability): boolean => {
    if (level === 1) {
      const racial = racialAbilityScoreIncreases[ability];
      if (racial && racial < 0) return true;
    }

    return false;
  };

  const disabled = level % 4 !== 0 && !(!!racialLevelOneIncrease && level === 1);

  return (
    <>
      {(Object.keys(abilityScores) as Ability[]).map(ability => disabled
        ? (
          <AbilityScoreCell
            key={ability}
            score={calculateAbilityScore(ability)}
            bonus={hasBonus(ability)}
            penalty={hasPenalty(ability)}
            disabled={disabled}
          />
        ) : (
          <AbilityScoreCell
            key={ability}
            score={calculateAbilityScore(ability)}
            bonus={hasBonus(ability)}
            penalty={hasPenalty(ability)}
            disabled={disabled}
            selected={abilityScoreIncreases[level] === ability}
            onSelect={() => changeAbilityScoreIncrease(ability)}
          />
        ),
      )}
    </>
  );
};
