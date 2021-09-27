import { Class } from './class.primary';
import { Prerequisite } from './class.prerequisite';

export interface PrestigeClass extends Class {
  prerequisites: Prerequisite[];
  maxLevel: number;
}
