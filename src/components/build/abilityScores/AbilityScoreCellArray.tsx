import React, { FC, useCallback } from 'react';

import { Ability, AbilityScores, Build, getAbilityName } from '../../../models';
import { AbilityScoreCell } from './AbilityScoreCell';

export interface AbilityScoreCellArrayProps {
  abilityScores: AbilityScores;
  abilityScoreIncreases: Record<number | string, string>;
  bonuses?: Partial<AbilityScores>
  choice?: boolean;
  level: number;
  updateBuild: (data: Partial<Build>) => void;
}

export const AbilityScoreCellArray: FC<AbilityScoreCellArrayProps> = ({
  abilityScores,
  abilityScoreIncreases,
  bonuses,
  choice,
  level,
  updateBuild,
}) => {
  const changeAbilityScoreIncrease = useCallback((ability: Ability): void => {
    updateBuild({
      abilityScoreIncreases: {
        [level]: ability,
      },
    });
  }, [abilityScoreIncreases, level]);

  const hasBonus = useCallback((ability: Ability): boolean => {
    if (level === 1 && bonuses) {
      const racial = bonuses[ability];
      if (racial && racial > 0) return true;
    }

    return false;
  }, [bonuses]);

  const hasPenalty = useCallback((ability: Ability): boolean => {
    if (level === 1 && bonuses) {
      const racial = bonuses[ability];
      if (racial && racial < 0) return true;
    }

    return false;
  }, [bonuses]);

  return (
    <>
      {(Object.keys(abilityScores) as Ability[]).map(ability => choice
        ? (
          <AbilityScoreCell
            key={ability}
            title={getAbilityName(ability)}
            score={abilityScores[ability]}
            bonus={hasBonus(ability)}
            penalty={hasPenalty(ability)}
            disabled={choice}
          />
        ) : (
          <AbilityScoreCell
            key={ability}
            title={getAbilityName(ability)}
            score={abilityScores[ability]}
            bonus={hasBonus(ability)}
            penalty={hasPenalty(ability)}
            disabled={choice}
            selected={abilityScoreIncreases[level] === ability}
            onSelect={() => changeAbilityScoreIncrease(ability)}
          />
        ),
      )}
    </>
  );
};
