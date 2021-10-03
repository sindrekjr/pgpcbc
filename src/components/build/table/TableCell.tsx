import styled, { css } from 'styled-components';
import { rem } from 'polished';

export interface TableCellProps {
  disabled?: boolean;
}

export const TableCell = styled.td<TableCellProps>`
  background: #ede0b6;
  border: ${rem(1)} solid #cdc0a6;

  font-size: ${rem(13)};

  ${({ disabled }) => disabled && css`
    border: ${rem(1)} solid #e6e1dd;
    color: grey;
    cursor: initial;
  `}
`;
