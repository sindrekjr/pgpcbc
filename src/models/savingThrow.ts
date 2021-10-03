export type SavingThrow = 'fort' | 'ref' | 'will';

export enum SavingThrowProgression {
  Low,
  High,
  PrestigeLow,
  PrestigeHigh,
}

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
