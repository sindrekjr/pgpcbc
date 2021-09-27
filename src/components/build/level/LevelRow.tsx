import React, { FC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { AbilityScores, Build, Race } from '../../../models';
import { AbilityScoreCellArray } from '../abilityScores';
import { ClassCell } from '../class';
import { TableCell, TableRow, TableSelect } from '../table';

const LevelCell = styled(TableCell)`
  text-align: center;
  width: ${rem(25)};
`;

export interface LevelRowProps {
  abilityScores: AbilityScores;
  classId: number;
  build: Build;
  level: number;
  race: Race;
  updateBuild: (data: Partial<Build>) => void;
}

export const LevelRow: FC<LevelRowProps> = ({
  abilityScores,
  classId,
  build,
  level,
  race,
  updateBuild,
}) => {
  const { abilityScoreIncreases, feats } = build;

  const changeClass = (newClassId: number) => updateBuild({ classes: { [level]: newClassId }});

  return (
    <TableRow>
      <LevelCell>{level}</LevelCell>
      <ClassCell classId={classId} onChange={changeClass} />
      <AbilityScoreCellArray
        abilityScores={abilityScores}
        abilityScoreIncreases={abilityScoreIncreases}
        level={level}
        race={race}
        updateBuild={updateBuild}
      />
      <TableCell disabled={level % 2 === 0}>
        {level % 2 !== 0 && (
          <TableSelect name="feat">
            <option>
              {feats[level] && feats[level].general}
            </option>
          </TableSelect>
        )}
      </TableCell>
      <TableCell>
        {feats[level] && feats[level].bonus1}
      </TableCell>
      <TableCell>
        {feats[level] && feats[level].bonus2}
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};
