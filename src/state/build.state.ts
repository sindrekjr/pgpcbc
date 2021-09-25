import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { getAllBuilds } from '../services';
import { CharacterBuild } from '../models';

export const buildListState = atom<CharacterBuild[]>({
  key: 'buildList/state',
  default: selector<CharacterBuild[]>({
    key: 'buildList/selector',
    get: getAllBuilds,
  }),
});

export const buildState = atomFamily<CharacterBuild | undefined, number>({
  key: 'build/state',
  default: selectorFamily<CharacterBuild | undefined, number>({
    key: 'build/selector',
    get: identifier => ({ get }) => get(buildListState).find(({ id }) => id === identifier),
  }),
});
