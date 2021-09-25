import { AbilityScores } from '../ability';
import { Alignment } from '../alignment';

export interface Character {
  id: number;
  name: string;
  abilityScores: AbilityScores;
  alignment: Alignment;
  builds: number[];
}
