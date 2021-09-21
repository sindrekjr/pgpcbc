import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Oracle = new Class({ name: 'Oracle' });

export const DivineHerbalist = new Archetype({
  base: Oracle,
  name: 'Divine Herbalist',
});

export const EnlightenedPhilosopher = new Archetype({
  base: Oracle,
  name: 'Enlightened Philosopher',
});

export const LoneStrider = new Archetype({
  base: Oracle,
  name: 'Lone Strider',
});

export const PossessedOracle = new Archetype({
  base: Oracle,
  name: 'Possessed Oracle',
});

export const Purifier = new Archetype({
  base: Oracle,
  name: 'Purifier',
});

export const Seeker = new Archetype({
  base: Oracle,
  name: 'Seeker',
});

export const WindWhisperer = new Archetype({
  base: Oracle,
  name: 'Wind Whisperer',
});
