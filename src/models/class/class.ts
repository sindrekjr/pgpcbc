import { Level } from '../level';
import { Archetype } from './class.archetype';
import { Prerequisite } from './class.prerequisite';

export interface ClassOptions {
  name: string;
  levels?: Level[];
  prerequisites?: Prerequisite[];
}

export class Class {
  name: string;
  levels: Level[];
  prerequisites?: Prerequisite[];

  constructor({ name, levels = [], prerequisites }: ClassOptions) {
    this.name = name;
    this.levels = levels;
    this.prerequisites = prerequisites;
  }

  public createArchetype = (name: string, levels: Level[] = []): Archetype => new Archetype({
    base: this,
    name,
    levels,
  });
}
