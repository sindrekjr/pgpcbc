import { Levels } from '..';
import { ClassLevel } from '../level';
import { Prerequisite } from './class.prerequisite';

export interface ClassOptions {
  name: string;
  levels?: Levels<ClassLevel>;
  prerequisites?: Prerequisite[];
}

export class Class {
  name: string;
  levels: Levels<ClassLevel>;
  prerequisites?: Prerequisite[];

  constructor({ name, levels = [], prerequisites }: ClassOptions) {
    this.name = name;
    this.levels = levels;
    this.prerequisites = prerequisites;
  }
}
