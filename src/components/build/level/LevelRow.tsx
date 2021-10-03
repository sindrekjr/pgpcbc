import React, { FC, useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import { Ability, AbilityScores, Build, Race, resolveAbilityScoreModifier } from '../../../models';
import { classState } from '../../../state';
import { AbilityScoreCellArray } from '../abilityScores';
import { ClassCell } from '../class';
import { TableCell, TableRow, TableSelect } from '../table';
import { StatProgressionArray } from './StatProgressionArray';

const LevelCell = styled(TableCell)`
  text-align: center;
  width: ${rem(25)};
`;

export interface LevelRowProps {
  race: Race;
  level: number;
  classId: number;
  classes: number[];
  abilityScores: AbilityScores;
  abilityScoreIncreases: Record<number | string, string>;
  feats?: {
    general?: string;
    bonus1?: string;
    bonus2?: string;
  };
  updateBuild: (data: Partial<Build>) => void;
}

export const LevelRow: FC<LevelRowProps> = ({
  race,
  level,
  classId,
  classes,
  abilityScores,
  abilityScoreIncreases,
  feats: {
    general,
    bonus1,
    bonus2,
  } = {},
  updateBuild,
}) => {
  const currentClass = useRecoilValue(classState(classId));
  const changeClass = (newClassId: number) => (
    updateBuild({ classes: { [level]: newClassId }})
  );

  const getClassLevel = useCallback(() => (
    classes.filter(id => id === classId).length
  ), [classes, classId]);

  const classLevel = useMemo(() => getClassLevel(), [getClassLevel]);

  const {
    abilityScoreChoiceIncrease: racialLevelOneIncrease,
    abilityScores: racialAbilityScoreIncreases = {},
  } = race;

  const calculateAbilityScore = useCallback((ability: Ability): number => {
    const racialAbilityIncrease = racialAbilityScoreIncreases[ability] || 0;
    const levelOneIncrease = abilityScoreIncreases[1] === ability && racialLevelOneIncrease || 0;
    const regularIncreases = Object.keys(abilityScoreIncreases).filter(key => (
      key != '1' &&
      abilityScoreIncreases[key] === ability
    )).length;

    return abilityScores[ability] + racialAbilityIncrease + levelOneIncrease + regularIncreases;
  }, [abilityScores, abilityScoreIncreases, racialLevelOneIncrease, racialAbilityScoreIncreases]);

  const calculateAbilityScores = useCallback((): AbilityScores => (
    (Object.keys(abilityScores) as Ability[]).reduce((acc, ability) => ({
      ...acc,
      [ability]: calculateAbilityScore(ability),
    }), {} as AbilityScores)
  ), [abilityScores, calculateAbilityScore]);

  const calculatedAbilityScores = calculateAbilityScores();

  const savingThrowModifiers = useMemo(() => ({
    fort: resolveAbilityScoreModifier(calculatedAbilityScores.con),
    ref: resolveAbilityScoreModifier(calculatedAbilityScores.dex),
    will: resolveAbilityScoreModifier(calculatedAbilityScores.wis),
  }), [calculatedAbilityScores]);

  return (
    <TableRow>
      <LevelCell>{level}</LevelCell>
      <ClassCell cl={currentClass} classLevel={classLevel} onChange={changeClass} />
      <AbilityScoreCellArray
        abilityScores={calculatedAbilityScores}
        abilityScoreIncreases={abilityScoreIncreases}
        bonuses={racialAbilityScoreIncreases}
        choice={level % 4 !== 0 && !(!!racialLevelOneIncrease && level === 1)}
        level={level}
        updateBuild={updateBuild}
      />
      <TableCell disabled={level % 2 === 0} width={200}>
        {level % 2 !== 0 && (
          <TableSelect name="generalFeat">
            <option>
              {general}
            </option>
          </TableSelect>
        )}
      </TableCell>
      <TableCell disabled={!bonus1} width={200}>
        {!!bonus1 && (
          <TableSelect name="bonusFeat1">
            <option>
              {bonus1}
            </option>
          </TableSelect>
        )}
      </TableCell>
      <TableCell disabled={!bonus2}>
        {!!bonus2 && (
          <TableSelect name="bonusFeat2">
            <option>
              {bonus2}
            </option>
          </TableSelect>
        )}
      </TableCell>
      <StatProgressionArray classIds={classes} modifiers={savingThrowModifiers} />
      <TableCell></TableCell>
    </TableRow>
  );
};
