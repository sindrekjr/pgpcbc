import React, { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { characterListState, selectedCharacterState } from '../state';

export const Nav: FC = () => {
  const characters = useRecoilValue(characterListState);
  const setCharacter = useSetRecoilState(selectedCharacterState);

  return (
    <nav>
      {characters.map(({ id, name }) => (
        <button key={id} onClick={() => setCharacter(id)}>
          {name}
        </button>
      ))}
    </nav>
  );
};
