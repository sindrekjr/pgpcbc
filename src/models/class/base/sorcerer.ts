import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Sorcerer = new Class({ name: 'Sorcerer' });

export const Crossblooded = new Archetype({
  base: Sorcerer,
  name: 'Crossblooded',
});

export const EmpyrealSorcerer = new Archetype({
  base: Sorcerer,
  name: 'Empyreal Sorcerer',
});

export const NineTailedHeir = new Archetype({
  base: Sorcerer,
  name: 'Nine Tailed Heir',
});

export const OverwhelmingMage = new Archetype({
  base: Sorcerer,
  name: 'Overwhelming Mage',
});

export const SageSorcerer = new Archetype({
  base: Sorcerer,
  name: 'Sage Sorcerer',
});

export const SeekerSorcerer = new Archetype({
  base: Sorcerer,
  name: 'Seeker',
});

export const SylvanSorcerer = new Archetype({
  base: Sorcerer,
  name: 'Sylvan Sorcerer',
});
