import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { Race } from '../models';
import { getAllRaces } from '../services';

export const raceListState = atom<Race[]>({
  key: 'raceList/state',
  default: selector<Race[]>({
    key: 'raceList/selector',
    get: getAllRaces,
  }),
});

export const raceState = atomFamily<Race | undefined, number>({
  key: 'race/state',
  default: selectorFamily<Race | undefined, number>({
    key: 'race/selector',
    get: identifier => ({ get }) => get(raceListState).find(({ id }) => id === identifier),
  }),
});
