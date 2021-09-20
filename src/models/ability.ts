export enum Ability {
  Str, Dex, Con,
  Int, Wis, Cha,
}

export interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export const resolveAbilityScoreModifier = (score: number): number => Math.floor((score - 10) / 2);
