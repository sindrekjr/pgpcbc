import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { TableCell, TableCellProps } from './TableCell';

const bonusColour = '#969d76';
const penaltyColour = '#ba847c';
const selectedColour = '#926a82';

interface ScoreProps extends TableCellProps {
  bonus?: boolean;
  penalty?: boolean;
  selected?: boolean;
}

const Score = styled(TableCell)<ScoreProps>`
  flex-direction: row;
  text-align: center;

  ${({ bonus }) => bonus && css`
    background: ${bonusColour};
    color: white;
  `}

  ${({ penalty }) => penalty && css`
    background: ${penaltyColour};
    color: white;
  `}

  ${({ selected }) => selected && css`
    background: ${selectedColour};
    border: ${rem(1)} inset #aca195;
    color: white;
  `}

  ${({ bonus, penalty, selected }) => (bonus || penalty) && selected && css`
    background: -webkit-linear-gradient(
      145deg, ${bonus ? bonusColour : penaltyColour} 30%, ${selectedColour} 40%
    );
  `}
`;

const Button = styled.button`
  display: flex;
  background: transparent;
  border: 0;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
`;

export interface AbilityScoreTableCellProps extends ScoreProps {
  score: number;
  onSelect?: () => void;
}

export const AbilityScoreTableCell: FC<AbilityScoreTableCellProps> = ({
  score,
  bonus,
  penalty,
  disabled,
  selected,
  onSelect,
}) => (
  <Score
    bonus={bonus}
    penalty={penalty}
    disabled={disabled}
    selected={selected}
    width={20}
  >
    <Button
      disabled={disabled}
      onClick={() => onSelect && onSelect()}
      tabIndex={disabled ? -1 : 0}
    >
      {score}
    </Button>
  </Score>
);
