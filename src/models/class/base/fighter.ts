import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Fighter = new Class({ name: 'Fighter' });

export const AldoriDefender = new Archetype({
  base: Fighter,
  name: 'Aldori Defender',
});

export const Armiger = new Archetype({
  base: Fighter,
  name: 'Armiger',
});

export const DragonhearScion = new Archetype({
  base: Fighter,
  name: 'Dragonhear Scion',
});

export const MutationWarrior = new Archetype({
  base: Fighter,
  name: 'Mutation Warrior',
});

export const TowerShieldSpecialist = new Archetype({
  base: Fighter,
  name: 'Tower Shield Specialist',
});

export const TwoHandedFighter = new Archetype({
  base: Fighter,
  name: 'Two-Handed Fighter',
});
