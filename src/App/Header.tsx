import React, { FC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Heading = styled.h1`
  font-size: ${rem(60)};
  color: #e6e2ad;
  -webkit-text-stroke-width: ${rem(2.5)};
  -webkit-text-stroke-color: #290a0a;
`;

export interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({
  title = 'Pathfinder Character Builder',
}) => (
  <header>
    <Heading>{title}</Heading>
  </header>
);
