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

export const calculateBaseAttackBonus = (
  levels: number,
  progression: BaseAttackBonusProgression,
): number => Math.floor(levels * progression);

export const calculateSavingThrowBonus = (
  levels: number,
  progression: SavingThrowProgression,
): number => {
  switch (progression) {
    case SavingThrowProgression.Low:
      return Math.floor(levels / 3);

    case SavingThrowProgression.High:
      return Math.floor(levels / 2) + 2;

    case SavingThrowProgression.PrestigeLow:
      return Math.ceil(levels / 2);

    case SavingThrowProgression.PrestigeHigh:
      return Math.ceil(levels / 3);
  }
};
