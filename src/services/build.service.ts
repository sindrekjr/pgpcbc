import { CharacterBuild } from '../models';
import { builds } from './data';

export const getAllBuilds = (): CharacterBuild[] => [...builds];
