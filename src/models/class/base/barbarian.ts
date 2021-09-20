import { Class } from '../class';

export const Barbarian = new Class({ name: 'Barbarian' });

export const ArmoredHulk = Barbarian.createArchetype('Armored Hulk');

export const BeastkinBerserker = Barbarian.createArchetype('Beastkin Berserker');

export const InstinctualWarrior = Barbarian.createArchetype('Instinctual Warrior');

export const InvulnerableRager = Barbarian.createArchetype('Invulnerable Rager');

export const MadDog = Barbarian.createArchetype('Mad Dog');

export const PackRager = Barbarian.createArchetype('Pack Rager');
