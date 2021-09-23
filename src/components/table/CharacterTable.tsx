import React, { FC } from 'react';
import styled from 'styled-components';

import { Ability, Character, PremadeCharacter } from '../../models';
import { AbilityScoreTableCell } from './AbilityScoreTableCell';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

const Table = styled.table`
  width: 100%;
`;

export interface CharacterTableProps {
  character: Character;
  updateCharacter: (data: Partial<Character>) => void;
}

export const CharacterTable: FC<CharacterTableProps> = ({ character, updateCharacter }) => {
  const {
    abilityScores,
    abilityScoreIncreases,
    classes,
  } = character as PremadeCharacter; // TODO: don't cast

  const countAbilityScoreIncreases = (ability: string, atLevel: number): number => (
      [4, 8, 12, 16, 20].filter(n => n <= atLevel) as (4 | 8 | 12 | 16 | 20)[]
  ).filter(key => abilityScoreIncreases[key] === ability).length;

  const abilityScoreIncreaseSelected = (ability: string, atLevel: number): boolean => (
    abilityScoreIncreases[atLevel] === ability
  );

  const changeAbilityScoreIncrease = (ability: Ability, atLevel: number): void => {
    updateCharacter({
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
        <th>Details</th>
      </thead>
      <tbody>
        {Object.values(classes).map((cl, i) => (
          <TableRow key={`${cl}-${i}`}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>
              {`${cl} (${classes.slice(0, i + 1).filter(c => c === cl).length})`}
            </TableCell>
            {Object.entries(abilityScores).map(([a, score]) => (
              <AbilityScoreTableCell
                key={a}
                ability={a as Ability}
                score={score + countAbilityScoreIncreases(a, i + 1)}
                disabled={(i + 1) % 4 !== 0}
                selected={(i + 1) % 4 === 0 && abilityScoreIncreaseSelected(a, i + 1)}
                onSelect={ability => changeAbilityScoreIncrease(ability, i + 1)}
              />
            ))}
            <TableCell></TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
