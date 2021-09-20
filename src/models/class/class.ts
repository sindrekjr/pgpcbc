import { ClassLevel } from '../level';
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

export interface ArchetypeOptions extends ClassOptions {
  base: Class;
}

export class Archetype extends Class {
  base: Class;

  constructor({ base, name, levels, prerequisites }: ArchetypeOptions) {
    super({ name, levels, prerequisites });
    this.base = base;
  }
}

