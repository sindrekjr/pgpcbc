import React, { FC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Heading = styled.h1`
  color: #e6e2ad;
  font-size: ${rem(60)};
  text-align: center;
  -webkit-text-stroke-width: ${rem(2.5)};
  -webkit-text-stroke-color: #290a0a;

  @media (max-width: 1200px) {
    font-size: ${rem(46)};
    -webkit-text-stroke-width: ${rem(2)};
  }
`;

const HeaderWrapper = styled.header`
  ${Heading}:last-child {
      display: none;
    }

  @media (max-width: 768px) {
    ${Heading}:first-child {
      display: none;
    }

    ${Heading}:last-child {
      display: flex;
    }
  }
`;

export interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({
  title = 'Pretty Good Pathfinder Character Build Calculator',
}) => {
  const shortTitle = title.split(' ').reduce((short, word) => short + word[0], '');

  return (
    <HeaderWrapper>
      <Heading>{title}</Heading>
      <Heading>{shortTitle}</Heading>
    </HeaderWrapper>
  );
};
