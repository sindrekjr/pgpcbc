import { Ability } from '../ability';

export interface Race {
  id: number;
  name: string;
  abilityModifications: Record<Ability, number>;
  traits: number[];
}
