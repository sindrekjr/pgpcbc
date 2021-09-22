import React, { FC } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import sheet from '../../assets/sheet.jpg';
import { Character } from '../../models';
import { characterState } from '../../state';
import { CharacterTable } from '../table';
import { BaseInformation } from './BaseInformation';
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

  font-family: cursive;
`;

const Summary = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h2`
  font-size: ${rem(36)};
`;

export interface CharacterSheetProps {
  id: number;
}

export const CharacterSheet: FC<CharacterSheetProps> = ({ id }) => {
  const [character, setCharacter] = useRecoilState(characterState(id));
  const { name } = character;

  const updateCharacter = (data: Partial<Character>) => {
    setCharacter({
      ...character,
      ...data,
    });
  };

  return (
    <Sheet>
      <BaseInformation character={character} updateCharacter={updateCharacter} />
      <Summary>
        <Name>{name}</Name>
        <CharacterStats character={character} />
      </Summary>
      <CharacterTable character={character} />
    </Sheet>
  );
};
