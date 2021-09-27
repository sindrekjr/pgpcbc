import { ClassLevel, Levels } from '../level';
import { Prerequisite } from './class.prerequisite';

export interface Class {
  id: number;
  name: string;
  levels: Levels<ClassLevel>;
  prerequisites?: Prerequisite[];
}

export interface PrimaryClass extends Class {
  archetypes: number[];
}
