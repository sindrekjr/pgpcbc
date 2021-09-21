import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Slayer = new Class({ name: 'Slayer' });

export const ArcaneEnforcer = new Archetype({
  base: Slayer,
  name: 'Arcane Enforcer',
});

export const Deliverer = new Archetype({
  base: Slayer,
  name: 'Deliverer',
});

export const Executioner = new Archetype({
  base: Slayer,
  name: 'Executioner',
});

export const Imitator = new Archetype({
  base: Slayer,
  name: 'Imitator',
});

export const SpawnSlayer = new Archetype({
  base: Slayer,
  name: 'Spawn Slayer',
});

export const StygianSlayer = new Archetype({
  base: Slayer,
  name: 'Stygian Slayer',
});

export const Vanguard = new Archetype({
  base: Slayer,
  name: 'Vanguard',
});
