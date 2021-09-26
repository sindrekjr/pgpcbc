import { Class } from './class';
import { Prerequisite } from './class.prerequisite';

export interface PrestigeClass extends Class {
  prerequisites: Prerequisite[];
  maxLevel: number;
}
