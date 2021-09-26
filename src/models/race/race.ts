import { AbilityScores } from '../ability';

export interface Race {
  id: number;
  name: string;
  abilityScoreChoiceIncrease?: number;
  abilityScores?: Partial<AbilityScores>;
  skills?: Record<string, number>;
  traits?: number[];
}
