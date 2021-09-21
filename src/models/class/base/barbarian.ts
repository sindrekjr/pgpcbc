import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Barbarian = new Class({ name: 'Barbarian' });

export const ArmoredHulk = new Archetype({
  base: Barbarian,
  name: 'Armored Hulk',
});

export const BeastkinBerserker = new Archetype({
  base: Barbarian,
  name: 'Beastkin Berserker',
});

export const InstinctualWarrior = new Archetype({
  base: Barbarian,
  name: 'Instinctual Warrior',
});

export const InvulnerableRager = new Archetype({
  base: Barbarian,
  name: 'Invulnerable Rager',
});

export const MadDog = new Archetype({
  base: Barbarian,
  name: 'Mad Dog',
});

export const PackRager = new Archetype({
  base: Barbarian,
  name: 'Pack Rager',
});
