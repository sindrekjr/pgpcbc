import { Class } from '../../../models';

import { primaryClasses } from './primary';
import { prestigeClasses } from './prestige';

export const classes: Class[] = [
  ...primaryClasses,
  ...prestigeClasses,
];
