import React, { FC } from 'react';
import styled from 'styled-components';
import { Character } from '../models';

const Wrapper = styled.div`
  color: white;
`;

export interface CharacterTableProps {
  character: Character;
}

export const CharacterTable: FC<CharacterTableProps> = ({ character }) => {
  const { name, levels } = character;

  return (
    <Wrapper>
      <h2>{name}</h2>
      <table>
        <thead>
          <th></th>
          <th>Class</th>
          <th>Details</th>
        </thead>
        <tbody>
          {levels.map(({ class: cl }, index) => (
            <tr key={`${cl}-${index}`}>
              <td>{index + 1}</td>
              <td>{cl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};
