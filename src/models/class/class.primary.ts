import { ClassLevel, Levels } from '../level';
import { Prerequisite } from './class.prerequisite';

export enum BaseAttackBonusProgression {
  Half = 0.5,
  Average = 0.75,
  Full = 1,
}

export enum SavingThrowProgression {
  Low,
  High,
  PrestigeLow,
  PrestigeHigh,
}

export interface Class {
  id: number;
  name: string;
  levels: Levels<ClassLevel>;
  progression: {
    baseAttackBonus: BaseAttackBonusProgression;
    fortitude: SavingThrowProgression;
    reflex: SavingThrowProgression;
    will: SavingThrowProgression;
  };
  prerequisites?: Prerequisite[];
}

export interface PrimaryClass extends Class {
  archetypes: number[];
}
