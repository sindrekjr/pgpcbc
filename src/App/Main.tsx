import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { CharacterSheet } from '../components';
import { selectedCharacterState } from '../state';
import { Nav } from './Nav';

const MainElement = styled.main`
  width: 100%;
`;

export const Main: FC = () => (
  <MainElement>
    <Nav />
    <CharacterSheet id={useRecoilValue(selectedCharacterState)} />
  </MainElement>
);
