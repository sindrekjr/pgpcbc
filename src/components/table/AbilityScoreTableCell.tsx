import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { Ability } from '../../models';
import { TableCell, TableCellProps } from './TableCell';

interface ScoreProps extends TableCellProps {
  bonus?: boolean;
  selected?: boolean;
}

const Score = styled(TableCell)<ScoreProps>`
  cursor: pointer;
  text-align: center;

  ${({ bonus }) => bonus && css`
    background: #cdc0a6;
  `}

  ${({ selected }) => selected && css`
    background: #926a82;
    border: ${rem(1)} solid #dad4ce;
    color: white;
  `}

  ${({ bonus, selected }) => bonus && selected && css`
    background: -webkit-linear-gradient(145deg, #cdc0a6 30%, #926a82 40%);
  `}
`;

export interface AbilityScoreTableCellProps extends ScoreProps {
  ability: Ability;
  score: number;
  onSelect?: (ability: Ability) => void;
}

export const AbilityScoreTableCell: FC<AbilityScoreTableCellProps> = ({
  ability,
  score,
  bonus,
  disabled,
  selected,
  onSelect,
}) => (
  <Score
    bonus={bonus}
    disabled={disabled}
    selected={selected}
    onClick={() => onSelect && onSelect(ability)}
    width={20}
  >
    {score}
  </Score>
);
