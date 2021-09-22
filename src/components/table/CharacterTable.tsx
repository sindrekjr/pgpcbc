import React, { FC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Character, PremadeCharacter } from '../../models';

const Table = styled.table`
  width: 100%;
`;

const Row = styled.tr`
  background: #ede0b6;
`;

const Cell = styled.td`
  border-radius: ${rem(4)};
  border: ${rem(1)} solid #290a0a;
`;

export interface CharacterTableProps {
  character: Character;
}

export const CharacterTable: FC<CharacterTableProps> = ({ character }) => {
  const { levels } = character as PremadeCharacter; // TODO: don't cast

  return (
    <Table>
      <thead>
        <th></th>
        <th>Class</th>
        <th>Details</th>
      </thead>
      <tbody>
        {Object.entries(levels).map(([level, { class: cl }]) => (
          <Row key={`${cl}-${level}`}>
            <Cell>{level}</Cell>
            <Cell>{cl}</Cell>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};
