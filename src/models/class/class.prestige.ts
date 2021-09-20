import { Class, ClassOptions } from './class';
import { Prerequisite } from './class.prerequisite';

export interface PrestigeClassOptions extends ClassOptions {
  prerequisites: Prerequisite[];
}

export class PrestigeClass extends Class {
  prerequisites: Prerequisite[];

  constructor({ name, levels, prerequisites }: PrestigeClassOptions) {
    super({ name, levels });
    this.prerequisites = prerequisites;
  }
}
