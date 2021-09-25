import { Ability } from '../ability';

export interface CharacterBuild {
  id: number;
  name: string;
  abilityScoreIncreases: Record<number | string, Ability | string>;
  classes: Record<number | string, string>;
  feats: Record<number | string, {
    bonus1?: string;
    bonus2?: string;
    general?: string;
  }>;
  skills: Record<number | string, Record<string, number>>;
  source?: string;
}
