import { Ability } from '../ability';

export interface CharacterBuild {
  id: number;
  name?: string;
  abilityScoreIncreases: Record<number, Ability | undefined>;
  classes: Record<number, string>;
  feats: Record<number, {
    bonus1?: string;
    bonus2?: string;
    general?: string;
  }>;
  skills: Record<number, Record<string, number>>;
}
