import { Class } from '../../../models';

import { archetypes, primaryClasses } from './primary';
import { prestigeClasses } from './prestige';

export const classes: Class[] = [
  ...primaryClasses, ...archetypes,
  ...prestigeClasses,
];
