import { AbilityScores } from './ability';
import { Alignment } from './alignment';
import { CharacterLevel, Levels } from './level';

export interface CharacterOptions {
  name: string;
  ability: AbilityScores;
  alignment: Alignment;
  levels: Levels<CharacterLevel>;
}

export interface Character {
  id: number;
  name?: string;
  ability?: AbilityScores;
  alignment?: Alignment;
  levels?: Levels<CharacterLevel>;
}

export interface PremadeCharacter extends Character {
  name: string;
  ability: AbilityScores;
  alignment: Alignment;
  levels: Levels<CharacterLevel>;
}
