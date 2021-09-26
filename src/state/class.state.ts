import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { Archetype, Class, PrestigeClass } from '../models';
import { getAllClasses } from '../services';

export const classListState = atom<Class[]>({
  key: 'classList/state',
  default: selector<Class[]>({
    key: 'classList/selector',
    get: getAllClasses,
  }),
});

export const primaryClassListSelector = selector<Class[]>({
  key: 'primaryClassList/selector',
  get: ({ get }) => (get(classListState) as Archetype[]).filter(c => !c.base),
});

export const archetypeListSelector = selector<Archetype[]>({
  key: 'archetypeList/selector',
  get: ({ get }) => (get(classListState) as Archetype[]).filter(c => c.base),
});

export const prestigeClassListSelector = selector<PrestigeClass[]>({
  key: 'prestigeClassList/selector',
  get: ({ get }) => (get(classListState) as PrestigeClass[]).filter(c => c.maxLevel),
});

export const classState = atomFamily<Class, number>({
  key: 'class/state',
  default: selectorFamily<Class, number>({
    key: 'class/selector',
    get: identifier => ({ get }) => {
      const cl = get(classListState).find(({ id }) => id === identifier);
      if (cl) return cl;

      throw new Error(`No class found with id ${identifier}.`);
    },
  }),
});

export const archetypesState = atomFamily<Archetype[], number>({
  key: 'archetypes/state',
  default: selectorFamily<Archetype[], number>({
    key: 'archetypes/selector',
    get: baseId => ({ get }) => get(archetypeListSelector).filter(({ base }) => base === baseId),
  }),
});
