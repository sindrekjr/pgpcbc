import { Class } from '../models';

import { classes } from './data';

export const getAllClasses = (): Class[] => [
  ...classes,
];
