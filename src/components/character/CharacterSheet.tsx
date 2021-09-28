import React, { FC, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import sheet from '../../assets/sheet.jpg';
import { Character } from '../../models';
import { characterState } from '../../state';
import { BuildTable } from '../build';
import { BaseInformation } from './BaseInformation';

const Sheet = styled.article`
  display: flex;
  flex-direction: column;

  background-image: url(${sheet});
  box-shadow: 0 0 ${rem(8)} 0;
  border-radius: ${rem(8)};
  opacity: 0.95;

  padding: ${rem(16)};
  width: 100%;
`;

export interface CharacterSheetProps {
  id: number;
}

export const CharacterSheet: FC<CharacterSheetProps> = ({ id }) => {
  const [character, setCharacter] = useRecoilState(characterState(id));
  const { builds } = character;

  const updateCharacter = useCallback((data: Partial<Character>) => {
    console.log('Updating character...', data);
    setCharacter({
      ...character,
      ...data,
    });
  }, [character, setCharacter]);

  if (!builds || !builds.length) return null;

  return (
    <Sheet>
      <BaseInformation character={character} updateCharacter={updateCharacter} />
      <BuildTable buildId={builds[0]} character={character} />
    </Sheet>
  );
};
