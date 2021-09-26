import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import { buildState } from '../../state/build.state';
import { Build, Character } from '../../models';
import { AbilityScoreTableCells } from './AbilityScoreTableCells';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { ClassTableCell } from './ClassTableCell';
import { TableSelect } from './TableSelect';

const Table = styled.table`
  width: 100%;

  th {
    text-align: left;
  }
`;

const LevelCell = styled(TableCell)`
  text-align: center;
  width: ${rem(25)};
`;

export interface BuildTableProps {
  buildId: number;
  character: Character;
}

export const BuildTable: FC<BuildTableProps> = ({ buildId, character }) => {
  const { abilityScores, race } = character;

  const [build, setBuild] = useRecoilState(buildState(buildId));
  if (!build) return null;

  const { abilityScoreIncreases, classes, feats } = build;

  const updateBuild = (data: Partial<Build>) => {
    console.log('Updating build...', data);
    setBuild({
      ...build,
      ...data,
    });
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th />
            <th>Class</th>
            <th colSpan={Object.keys(abilityScores).length} />
            <th>Feats (general)</th>
            <th colSpan={2}>Feats (bonus)</th>
            <th>Traits</th>
          </tr>
        </thead>
        <tbody>
          {(Object.entries(classes) as unknown as [string, number][]).map(([level, classId]) => (
            <TableRow key={`${classId}-${level}`}>
              <LevelCell>{level}</LevelCell>
              <ClassTableCell
                classId={classId}
                classCount={(
                  Object.values(classes).slice(0, parseInt(level)).filter(c => c === classId).length
                )}
                onChange={newClassId => updateBuild({
                  classes: { ...classes, [level]: newClassId },
                })}
              />
              <AbilityScoreTableCells
                abilityScores={abilityScores}
                abilityScoreIncreases={abilityScoreIncreases}
                level={parseInt(level)}
                raceId={race}
                updateBuild={updateBuild}
              />
              <TableCell disabled={parseInt(level) % 2 === 0}>
                {parseInt(level) % 2 !== 0 && (
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
          ))}
        </tbody>
      </Table>
    </>
  );
};
