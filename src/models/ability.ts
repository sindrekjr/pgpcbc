export type Ability =
  'strength' |
  'dexterity' |
  'constitution' |
  'intelligence' |
  'wisdom' |
  'charisma';

export type AbilityScores = Record<Ability, number>;

export const resolveAbilityScoreModifier = (score: number): number => Math.floor((score - 10) / 2);
