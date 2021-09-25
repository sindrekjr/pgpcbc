import styled, { css } from 'styled-components';
import { rem } from 'polished';

export interface TableCellProps {
  disabled?: boolean;
}

export const TableCell = styled.td<TableCellProps>`
  background: #ede0b6;
  border: ${rem(1)} solid #cdc0a6;

  ${({ disabled }) => disabled && css`
    color: grey;
    cursor: initial;
  `}
`;
