import React, { FC } from 'react';
import styled from 'styled-components';

import { CharacterSheet } from '../components';

const MainElement = styled.main`
  width: 100%;
`;

export const Main: FC = () => (
  <MainElement>
    <CharacterSheet id={0} />
  </MainElement>
);
