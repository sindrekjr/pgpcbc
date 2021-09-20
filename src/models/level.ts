import { Ability } from './ability';
import { Class } from './class';

export interface Level {
  skills?: { [skill: number]: number };
}

export interface CharacterLevel extends Level {
  class: Class;
  ability?: Ability;
}

export interface ClassLevel extends Level {
  abilities?: { [ability: number]: number };
}
