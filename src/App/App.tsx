import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import background from '../assets/kingmaker.bmp';
import { Header } from './Header';

const Wrapper = styled.div`
  background-image: url(${background});

  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0;
`;

const Cylinder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${rem(1660)};
`;

export const App: FC = () => (
  <RecoilRoot>
    <Wrapper>
      <Cylinder>
        <Header />
        <main>
          <p>
            Main paragraph.
          </p>
        </main>
      </Cylinder>
    </Wrapper>
  </RecoilRoot>
);
