import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Witch = new Class({ name: 'Witch' });

export const ElementalWitch = new Archetype({
  base: Witch,
  name: 'Elemental Witch',
});

export const Hagbound = new Archetype({
  base: Witch,
  name: 'Hagbound',
});

export const HexChanneler = new Archetype({
  base: Witch,
  name: 'Hex Channeler',
});

export const LeyLineGuardian = new Archetype({
  base: Witch,
  name: 'Ley Line Guardian',
});

export const StigmatizedWitch = new Archetype({
  base: Witch,
  name: 'Archeologist',
});

export const WitchoftheVeil = new Archetype({
  base: Witch,
  name: 'Witch of the Veil',
});
