import React, { FC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import sheet from '../../assets/sheet.jpg';
import { Character } from '../../models';
import { CharacterTable } from '..';
import { CharacterStats } from './CharacterStats';

const Sheet = styled.article`
  display: flex;
  flex-direction: column;

  background-image: url(${sheet});
  box-shadow: 0 0 ${rem(8)} 0;
  border-radius: ${rem(8)};
  opacity: 0.95;

  padding: ${rem(16)};
  width: 100%;

  font-family: Garamond;
`;

const Summary = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h2`
  font-size: ${rem(36)};
`;

export interface CharacterSheetProps {
  character: Character;
}

export const CharacterSheet: FC<CharacterSheetProps> = ({ character }) => {
  const { name } = character;

  return (
    <Sheet>
      <Summary>
        <Name>{name}</Name>
        <CharacterStats character={character} />
      </Summary>
      <CharacterTable character={character} />
    </Sheet>
  );
};
