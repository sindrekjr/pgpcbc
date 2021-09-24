import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { Ability } from '../../models';
import { TableCell } from './TableCell';

const Score = styled(TableCell)<{ bonus?: boolean, disabled?: boolean, selected?: boolean }>`
  cursor: pointer;
  text-align: center;

  ${({ bonus }) => bonus && css`
    background: #cdc0a6;
  `}

  ${({ disabled }) => disabled && css`
    color: grey;
    cursor: initial;
  `}

  ${({ selected }) => selected && css`
    background: #9b9b99;
    border: ${rem(1)} solid #a5a56a;
  `}

  ${({ bonus, selected }) => bonus && selected && css`
    background: -webkit-linear-gradient(145deg, #cdc0a6 30%, #9b9b99 40%);
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
