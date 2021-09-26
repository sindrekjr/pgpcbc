import { Race } from '../models/race';
import { races } from './data';

export const getAllRaces = (): Race[] => [
  ...races,
];
