import React, { FC, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import { AbilityScores, Build, Race } from '../../../models';
import { classState } from '../../../state';
import { AbilityScoreCellArray } from '../abilityScores';
import { ClassCell } from '../class';
import { TableCell, TableRow, TableSelect } from '../table';

const LevelCell = styled(TableCell)`
  text-align: center;
  width: ${rem(25)};
`;

export interface LevelRowProps {
  race: Race;
  level: number;
  classId: number;
  classLevel: number;
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
  classLevel,
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
  const changeClass = useCallback((newClassId: number) => (
    updateBuild({ classes: { [level]: newClassId }})
  ), [level]);

  return (
    <TableRow>
      <LevelCell>{level}</LevelCell>
      <ClassCell cl={currentClass} classLevel={classLevel} onChange={changeClass} />
      <AbilityScoreCellArray
        abilityScores={abilityScores}
        abilityScoreIncreases={abilityScoreIncreases}
        level={level}
        race={race}
        updateBuild={updateBuild}
      />
      <TableCell disabled={level % 2 === 0}>
        {level % 2 !== 0 && (
          <TableSelect name="generalFeat">
            <option>
              {general}
            </option>
          </TableSelect>
        )}
      </TableCell>
      <TableCell disabled={!bonus1}>
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
      <TableCell></TableCell>
    </TableRow>
  );
};
