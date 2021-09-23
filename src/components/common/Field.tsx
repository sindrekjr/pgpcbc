import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const Field = styled.fieldset<{ unsaved?: boolean, width?: number }>`
  display: flex;
  flex-direction: column;

  border: 0;
  margin: 0;

  width: 0%;

  input, select {
    background: none;
    border: none;
    border-bottom: ${rem(1)} dotted #290a0a;

    font-family: cursive;
    font-size: ${rem(16)};

    width: ${({ width = 100 }) => rem(width)};
  }

  label {
    font-family: serif;
    font-size: ${rem(8)};
  }

  ${({ unsaved }) => unsaved && css`
    color: red;

    input, select {
      border-bottom: ${rem(1)} solid red; 
    }
  `}
`;
