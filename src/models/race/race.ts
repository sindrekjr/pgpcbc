import { AbilityScores } from '../ability';

export interface Race {
  id: number;
  name: string;
  abilityScores?: Partial<AbilityScores> | number;
  skills?: Record<string, number>;
  traits?: number[];
}
