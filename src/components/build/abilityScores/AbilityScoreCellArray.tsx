import React, { FC, useCallback, useMemo } from 'react';

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

  const changeAbilityScoreIncrease = useCallback((ability: Ability): void => {
    updateBuild({
      abilityScoreIncreases: {
        ...abilityScoreIncreases,
        [level]: ability,
      },
    });
  }, [abilityScoreIncreases, level]);

  const calculateAbilityScore = useCallback((ability: Ability): number => {
    const racialAbilityIncrease = racialAbilityScoreIncreases[ability] || 0;
    const levelOneIncrease = abilityScoreIncreases[1] === ability && racialLevelOneIncrease || 0;
    const regularIncreases = Object.keys(abilityScoreIncreases).filter(key => (
      key != '1' &&
      abilityScoreIncreases[key] === ability
    )).length;

    return abilityScores[ability] + racialAbilityIncrease + levelOneIncrease + regularIncreases;
  }, [abilityScores, abilityScoreIncreases, racialLevelOneIncrease, racialAbilityScoreIncreases]);

  const hasBonus = useCallback((ability: Ability): boolean => {
    if (level === 1) {
      const racial = racialAbilityScoreIncreases[ability];
      if (racial && racial > 0) return true;
    }

    return false;
  }, [racialAbilityScoreIncreases]);

  const hasPenalty = useCallback((ability: Ability): boolean => {
    if (level === 1) {
      const racial = racialAbilityScoreIncreases[ability];
      if (racial && racial < 0) return true;
    }

    return false;
  }, [racialAbilityScoreIncreases]);

  const disabled = useMemo(() => (
    level % 4 !== 0 && !(!!racialLevelOneIncrease && level === 1)
  ), [level, racialLevelOneIncrease]);

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
