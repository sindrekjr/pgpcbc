import { AbilityScores } from './ability';
import { Alignment } from './alignment';
import { CharacterLevel, Levels } from './level';

export interface CharacterOptions {
  name: string;
  ability: AbilityScores;
  alignment: Alignment;
  levels: Levels<CharacterLevel>;
}

export class Character {
  name: string;
  ability: AbilityScores;
  alignment: Alignment;
  levels: Levels<CharacterLevel>;

  constructor({
    name,
    ability,
    alignment,
    levels,
  }: CharacterOptions) {
    this.name = name;
    this.ability = ability;
    this.alignment = alignment;
    this.levels = levels;
  }
}
