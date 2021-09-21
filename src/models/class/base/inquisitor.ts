import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Inquisitor = new Class({ name: 'Inquisitor' });

export const FaithHunter = new Archetype({
  base: Inquisitor,
  name: 'Faith Hunter',
});

export const Judge = new Archetype({
  base: Inquisitor,
  name: 'Judge',
});

export const MonsterTactician = new Archetype({
  base: Inquisitor,
  name: 'Monster Tactician',
});

export const SacredHuntsmaster = new Archetype({
  base: Inquisitor,
  name: 'Sacred Huntsmaster',
});

export const SactifiedSlayer = new Archetype({
  base: Inquisitor,
  name: 'Sactified Slayer',
});

export const TacticalLeader = new Archetype({
  base: Inquisitor,
  name: 'Tactical Leader',
});
