import { ClassLevel, Levels } from '../level';
import { Prerequisite } from './class.prerequisite';

export interface Class {
  id: number;
  name: string;
  levels: Levels<ClassLevel>;
  prerequisites?: Prerequisite[];
}

export class Class {
  name: string;
  levels: Levels<ClassLevel>;
  prerequisites?: Prerequisite[];

  constructor({ name, levels = [], prerequisites }: Class) {
    this.name = name;
    this.levels = levels;
    this.prerequisites = prerequisites;
  }
}
