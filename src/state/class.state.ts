import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { Class } from '../models';
import { getAllClasses } from '../services';

export const classListState = atom<Class[]>({
  key: 'classList/state',
  default: selector<Class[]>({
    key: 'classList/selector',
    get: getAllClasses,
  }),
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
