import { ClassLevel } from '../level';
import { Archetype } from './class.archetype';
import { Prerequisite } from './class.prerequisite';

export interface ClassOptions {
  name: string;
  levels?: ClassLevel[];
  prerequisites?: Prerequisite[];
}

export class Class {
  name: string;
  levels: ClassLevel[];
  prerequisites?: Prerequisite[];

  constructor({ name, levels = [], prerequisites }: ClassOptions) {
    this.name = name;
    this.levels = levels;
    this.prerequisites = prerequisites;
  }

  public createArchetype = (name: string, levels: ClassLevel[] = []): Archetype => new Archetype({
    base: this,
    name,
    levels,
  });
}
