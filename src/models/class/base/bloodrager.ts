import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Bloodrager = new Class({ name: 'Bloodrager' });

export const Bloodrider = new Archetype({
  base: Bloodrager,
  name: 'Bloodrider',
});

export const Greenrager = new Archetype({
  base: Bloodrager,
  name: 'Greenrager',
});

export const MixedBloodRager = new Archetype({
  base: Bloodrager,
  name: 'Mixed-Blood Rager',
});

export const Primalist = new Archetype({
  base: Bloodrager,
  name: 'Primalist',
});

export const ReformedFiend = new Archetype({
  base: Bloodrager,
  name: 'Reformed Fiend',
});

export const Spelleater = new Archetype({
  base: Bloodrager,
  name: 'Spelleater',
});

export const Steelblood = new Archetype({
  base: Bloodrager,
  name: 'Steelblood',
});
