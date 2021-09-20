import { Class } from '../class';

export const Fighter = new Class({ name: 'Fighter' });

export const AldoriDefender = Fighter.createArchetype('Aldori Defender');

export const Armiger = Fighter.createArchetype('Armiger');

export const DragonhearScion = Fighter.createArchetype('Dragonhear Scion');

export const MutationWarrior = Fighter.createArchetype('Mutation Warrior');

export const TowerShieldSpecialist = Fighter.createArchetype('Tower Shield Specialist');

export const TwoHandedFighter = Fighter.createArchetype('Two-Handed Fighter');
