import { Ability } from './ability';
import { Class } from './class';

export interface Level {
  class: Class;
  ability?: Ability;
  skills?: {
    [skill: number]: number;
  };
}
