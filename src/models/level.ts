import { Ability } from './ability';

export interface Level {
  skills?: { [skill: number]: number };
}

export interface CharacterLevel extends Level {
  class: string;
  ability?: Ability;
}

export interface ClassLevel extends Level {
  abilities?: { [ability: number]: number };
}
