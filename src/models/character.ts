import { Ability, AbilityScores } from './ability';
import { Alignment } from './alignment';
import { CharacterLevel, Levels } from './level';

export interface Character {
  id: number;
  name?: string;
  abilityScores?: AbilityScores;
  abilityScoreIncreases?: Record<number, Ability | undefined>;
  alignment?: Alignment;
  classes?: string[];
  levels?: Levels<CharacterLevel>;
}

export interface PremadeCharacter extends Character {
  name: string;
  abilityScores: AbilityScores;
  abilityScoreIncreases: Record<number, Ability | undefined>;
  alignment: Alignment;
  classes: string[];
  levels?: Levels<CharacterLevel>;
}
