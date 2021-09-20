import React, { FC } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  color: #e1a436;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
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
