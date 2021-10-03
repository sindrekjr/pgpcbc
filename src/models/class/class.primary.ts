import { ClassLevel, Levels } from '../level';
import { SavingThrowProgression } from '../savingThrow';
import { Prerequisite } from './class.prerequisite';

export enum BaseAttackBonusProgression {
  Half = 0.5,
  Average = 0.75,
  Full = 1,
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

export const calculateBaseAttackBonus = (
  levels: number,
  progression: BaseAttackBonusProgression,
): number => Math.floor(levels * progression);
