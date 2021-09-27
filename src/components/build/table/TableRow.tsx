import styled from 'styled-components';
import { rem } from 'polished';

import { TableCell } from './TableCell';

export const TableRow = styled.tr`
  &:first-child {
    border-radius: ${rem(20)};

    ${TableCell}:first-child {
      border-radius: ${rem(6)} 0 0 0;
    }

    ${TableCell}:last-child {
      border-radius: 0 ${rem(6)} 0 0;
    }
  }

  &:last-child {
    ${TableCell}:first-child {
      border-radius: 0 0 0 ${rem(6)};
    }

    ${TableCell}:last-child {
      border-radius: 0 0 ${rem(6)} 0;
    }
  }
`;
