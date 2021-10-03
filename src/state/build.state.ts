import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { getAllBuilds } from '../services';
import { Build } from '../models';

export const buildListState = atom<Build[]>({
  key: 'buildList/state',
  default: selector<Build[]>({
    key: 'buildList/selector',
    get: getAllBuilds,
  }),
});

export const selectedBuildState = atom<number>({
  key: 'selectedBuild/state',
  default: 0,
});

export const buildState = atomFamily<Build | undefined, number>({
  key: 'build/state',
  default: selectorFamily<Build | undefined, number>({
    key: 'build/selector',
    get: identifier => ({ get }) => get(buildListState).find(({ id }) => id === identifier),
  }),
});
