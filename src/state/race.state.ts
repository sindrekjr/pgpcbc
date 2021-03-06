import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { Heritage, Race } from '../models';
import { getAllRaces } from '../services';

export const raceListState = atom<Race[]>({
  key: 'raceList/state',
  default: selector<Race[]>({
    key: 'raceList/selector',
    get: getAllRaces,
  }),
});

export const baseRaceListSelector = selector<Race[]>({
  key: 'baseRaceList/selector',
  get: ({ get }) => (get(raceListState) as Heritage[]).filter(r => !r.base),
});

export const raceHeritageListSelector = selector<Heritage[]>({
  key: 'raceHeritageList/selector',
  get: ({ get }) => (get(raceListState) as Heritage[]).filter(r => r.base),
});

export const raceState = atomFamily<Race, number>({
  key: 'race/state',
  default: selectorFamily<Race, number>({
    key: 'race/selector',
    get: identifier => ({ get }) => {
      const allRaces = get(raceListState);
      const race = allRaces.find(({ id }) => id === identifier);

      if (race) {
        const base = (race as Heritage).base;
        if (!base) return race;

        const baseRace = allRaces.find(({ id }) => id === base);
        return {
          ...baseRace,
          ...race,
        };
      }

      throw new Error(`No race found with id ${identifier}.`);
    },
  }),
});

export const racialHeritagesState = atomFamily<Heritage[], number>({
  key: 'racialHeritages/state',
  default: selectorFamily<Heritage[], number>({
    key: 'racialHeritages/selector',
    get: baseId => ({ get }) => get(raceHeritageListSelector).filter(({ base }) => base === baseId),
  }),
});
