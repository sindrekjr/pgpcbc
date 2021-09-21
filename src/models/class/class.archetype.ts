import { Class, ClassOptions } from './class';

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
