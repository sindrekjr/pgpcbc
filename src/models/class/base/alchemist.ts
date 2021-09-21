import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Alchemist = new Class({ name: 'Alchemist' });

export const Chirurgeon = new Archetype({
  base: Alchemist,
  name: 'Chirurgeon',
});

export const Grenadier = new Archetype({
  base: Alchemist,
  name: 'Grenadier',
});

export const IncenseSynthesizer = new Archetype({
  base: Alchemist,
  name: 'Incense Synthesizer',
});

export const Metamorph = new Archetype({
  base: Alchemist,
  name: 'Metamorph',
});

export const Preservationist = new Archetype({
  base: Alchemist,
  name: 'Preservationist',
});

export const Vivisectionist = new Archetype({
  base: Alchemist,
  name: 'Vivisectionist',
});
