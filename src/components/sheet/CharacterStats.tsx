import React, { FC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Character, getAlignmentName, getAlignments, PremadeCharacter } from '../../models';

const Stats = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`;

const ChosenAlignment = styled.div`
  label, input {
    width: ${rem(110)};
    text-align: center;
  }
`;

const AbilityScores = styled.div`
  display: flex;
`;

const Ability = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${rem(14)};

  label, input {
    margin-left: ${rem(2)};
    text-align: center;
    width: ${rem(30)};
  }
`;

export interface CharacterStatsProps {
  character: Character;
  level?: number;
}

export const CharacterStats: FC<CharacterStatsProps> = ({ character }) => {
  const { alignment, ability } = character as PremadeCharacter; // TODO: don't cast

  return (
    <Stats>
      <ChosenAlignment>
        <label htmlFor="alignments">Alignment</label>
        <select name="alignments">
          {getAlignments().map(a => (
            <option key={a} value={a} selected={a === alignment}>
              {getAlignmentName(a)}
            </option>
          ))}
        </select>
      </ChosenAlignment>
      <AbilityScores>
        {Object.entries(ability).map(([a, score]) => (
          <Ability key={a}>
            <label>{a.substr(0, 3).toUpperCase()}</label>
            <input value={score} />
          </Ability>
        ))}
      </AbilityScores>
    </Stats>
  );
};
