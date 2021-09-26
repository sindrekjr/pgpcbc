import { Build } from '../models';
import { builds } from './data';

export const getAllBuilds = (): Build[] => [...builds];
