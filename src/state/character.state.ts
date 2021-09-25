import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { getAllCharacters } from '../services';
import { Character } from '../models';

export const characterListState = atom<Character[]>({
  key: 'characterList/state',
  default: selector<Character[]>({
    key: 'characterList/selector',
    get: getAllCharacters,
  }),
});

export const characterState = atomFamily<Character, number | string>({
  key: 'character/state',
  default: selectorFamily<Character, number | string>({
    key: 'character/selector',
    get: identifier => ({ get }) => {
      const characters = get(characterListState);
      const character = typeof identifier === 'string'
        ? characters.find(({ name }) => name === identifier)
        : characters[identifier];

      if (character) return character;

      throw new Error(`Identifier ${identifier} does not correspond to a character`);
    },
  }),
});
