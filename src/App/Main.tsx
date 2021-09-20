import React, { FC } from 'react';
import styled from 'styled-components';
import { CharacterTable } from '../components';

import { Alignment, Character } from '../models';

const MainElement = styled.main`
  width: 100%;
`;

export const Main: FC = () => {
  const character = new Character({
    name: 'Seelah',
    ability: {
      strength: 16,
      dexterity: 13,
      constitution: 14,
      intelligence: 10,
      wisdom: 13,
      charisma: 15,
    },
    alignment: Alignment.LG,
    levels: [
      {
        class: 'Paladin',
      },
      {
        class: 'Paladin',
      },
      {
        class: 'Paladin',
      },
    ],
  });

  return (
    <MainElement>
      <CharacterTable character={character} />
    </MainElement>
  );
};
