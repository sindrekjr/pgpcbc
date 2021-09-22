import React, { FC, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Character } from '../../models';

const Field = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
  width: 0%;

  input {
    background: none;
    border: none;
    border-bottom: ${rem(1)} dotted #290a0a;

    font-size: ${rem(16)};
  }

  label {
    font-family: serif;
    font-size: ${rem(8)};
  }
`;

export interface BaseInformationProps {
  character: Character;
  updateCharacter: (data: Partial<Character>) => void;
}

export const BaseInformation: FC<BaseInformationProps> = ({
  character,
  updateCharacter,
}) => {
  const { name } = character;
  const [nameVal, setNameVal] = useState(name);

  const handleKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>, data: Partial<Character>) => {
    if (key === 'Enter') updateCharacter(data);
  };

  return (
    <section>
      <Field>
        <input
          name="name"
          value={nameVal}
          onChange={e => setNameVal(e.target.value)}
          onKeyDown={e => handleKeyDown(e, { name: (e.target as HTMLInputElement).value })}
        />
        <label htmlFor="name">Name</label>
      </Field>
    </section>
  );
};
