import { Ability } from '../ability';

export interface Build {
  id: number;
  name: string;
  description?: string;
  source?: string;
  abilityScoreIncreases: Record<number | string, Ability | string>;
  classes: Record<number | string, number>;
  feats: Record<number | string, {
    bonus1?: string;
    bonus2?: string;
    general?: string;
  }>;
  skills: Record<number | string, Record<string, number>>;
}
