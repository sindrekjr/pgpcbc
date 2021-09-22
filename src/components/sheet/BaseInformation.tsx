import React, { FC, KeyboardEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { Character, getAlignmentName, getAlignments } from '../../models';

const InformationSection = styled.section`
  display: flex;
`;

const Field = styled.fieldset<{ unsaved?: boolean, width?: number }>`
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

export interface BaseInformationProps {
  character: Character;
  updateCharacter: (data: Partial<Character>) => void;
}

export const BaseInformation: FC<BaseInformationProps> = ({
  character,
  updateCharacter,
}) => {
  const { name, alignment } = character;
  const [nameVal, setNameVal] = useState(name);

  const handleKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>, data: Partial<Character>) => {
    if (key === 'Enter') updateCharacter(data);
  };

  return (
    <InformationSection>
      <Field unsaved={name !== nameVal} width={200}>
        <input
          type="text"
          name="name"
          placeholder="Character name"
          value={nameVal}
          onChange={e => setNameVal(e.target.value)}
          onKeyDown={e => handleKeyDown(e, { name: (e.target as HTMLInputElement).value })}
        />
        <label htmlFor="name">Name</label>
      </Field>
      <Field width={120}>
        <select
          name="alignment"
          onChange={e => updateCharacter({ alignment: parseInt(e.target.value) })}
        >
          {getAlignments().map(a => (
            <option key={a} value={a} selected={a === alignment}>
              {getAlignmentName(a)}
            </option>
          ))}
        </select>
        <label htmlFor="alignment">Alignment</label>
      </Field>
    </InformationSection>
  );
};
