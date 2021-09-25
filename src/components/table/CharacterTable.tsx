import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import { buildState } from '../../state/build.state';
import { Ability, Character } from '../../models';
import { AbilityScoreTableCell } from './AbilityScoreTableCell';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

const Table = styled.table`
  width: 100%;
`;

const LevelCell = styled(TableCell)`
  text-align: center;
  width: ${rem(25)};
`;

const ClassCell = styled(TableCell)`
  width: ${rem(220)};
`;

const FeatCell = styled(TableCell)`
  select {
    background: transparent;
    border: 0;
  }
`;

export interface CharacterTableProps {
  character: Character;
}

export const CharacterTable: FC<CharacterTableProps> = ({ character }) => {
  const { abilityScores, builds } = character; // TODO: don't cast

  const [build, setBuild] = useRecoilState(buildState(builds ? builds[0] : -1));
  if (!build) return null;

  const { abilityScoreIncreases, classes, feats } = build;

  const countAbilityScoreIncreases = (ability: string, atLevel: number): number => (
      [4, 8, 12, 16, 20].filter(n => n <= atLevel) as (4 | 8 | 12 | 16 | 20)[]
  ).filter(key => abilityScoreIncreases[key] === ability).length;

  const abilityScoreIncreaseSelected = (ability: string, atLevel: number): boolean => (
    abilityScoreIncreases[atLevel] === ability
  );

  const changeAbilityScoreIncrease = (ability: Ability, atLevel: number): void => {
    setBuild({
      ...build,
      abilityScoreIncreases: {
        ...abilityScoreIncreases,
        [atLevel]: ability,
      },
    });
  };

  return (
    <Table>
      <thead>
        <th></th>
        <th>Class</th>
        <th colSpan={Object.keys(abilityScores).length} />
        <th colSpan={3}>Feats</th>
        <th>Traits</th>
      </thead>
      <tbody>
        {(Object.entries(classes) as unknown as [number, string][]).map(([level, cl]) => (
          <TableRow key={`${cl}-${level}`}>
            <LevelCell>{level}</LevelCell>
            <ClassCell>
              {`${cl} (${Object.values(classes).slice(0, level).filter(c => c === cl).length})`}
            </ClassCell>
            {Object.entries(abilityScores).map(([a, score]) => (
              <AbilityScoreTableCell
                key={a}
                ability={a as Ability}
                score={score + countAbilityScoreIncreases(a, level)}
                disabled={level % 4 !== 0}
                selected={level % 4 === 0 && abilityScoreIncreaseSelected(a, level)}
                onSelect={ability => changeAbilityScoreIncrease(ability, level)}
              />
            ))}
            <FeatCell disabled={level % 2 === 0}>
              {level % 2 !== 0 && (
                <select name="feat">
                  <option>
                    {feats[level] && feats[level].general}
                  </option>
                </select>
              )}
            </FeatCell>
            <FeatCell>
              {feats[level] && feats[level].bonus1}
            </FeatCell>
            <FeatCell>
              {feats[level] && feats[level].bonus2}
            </FeatCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
