import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { CharacterTable } from '../components';
import { characterState } from '../state';

const MainElement = styled.main`
  width: 100%;
`;

export const Main: FC = () => {
  const character = useRecoilValue(characterState(0));

  return (
    <MainElement>
      <CharacterTable character={character} />
    </MainElement>
  );
};
