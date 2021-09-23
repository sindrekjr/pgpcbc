import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { Ability } from '../../models';
import { TableCell } from './TableCell';

const Score = styled(TableCell)<{ bonus?: boolean, disabled?: boolean, selected?: boolean }>`
  cursor: pointer;
  text-align: center;

  ${({ bonus }) => bonus && css`
    background: #efa34b;
  `}

  ${({ disabled }) => disabled && css`
    color: grey;
    cursor: initial;
  `}

  ${({ selected }) => selected && css`
    background: #b4be8a;
  `}
`;

export interface AbilityScoreTableCellProps {
  ability: Ability;
  score: number;
  bonus?: boolean;
  disabled?: boolean;
  selected?: boolean;
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
