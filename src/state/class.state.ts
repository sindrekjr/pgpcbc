import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { Archetype, Class, PrestigeClass, PrimaryClass } from '../models';
import { getAllClasses } from '../services';

export const classListState = atom<Class[]>({
  key: 'classList/state',
  default: selector<Class[]>({
    key: 'classList/selector',
    get: getAllClasses,
  }),
});

export const primaryClassListSelector = selector<PrimaryClass[]>({
  key: 'primaryClassList/selector',
  get: ({ get }) => (get(classListState) as PrimaryClass[]).filter(c => c.archetypes),
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
      const allClasses = get(classListState);
      const cl = allClasses.find(({ id }) => id === identifier);

      if (cl) {
        const base = (cl as Archetype).base;
        if (!base) return cl;

        const baseClass = allClasses.find(({ id }) => id === base);
        return {
          ...baseClass,
          ...cl,
        };
      }

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
