import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Kineticist = new Class({ name: 'Kineticist' });

export const BloodKineticist = new Archetype({
  base: Kineticist,
  name: 'Blood Kineticist',
});

export const DarkElementalist = new Archetype({
  base: Kineticist,
  name: 'Dark Elementalist',
});

export const ElementalEngine = new Archetype({
  base: Kineticist,
  name: 'Elemental Engine',
});

export const KineticKnight = new Archetype({
  base: Kineticist,
  name: 'Kinetic Knight',
});

export const OverwhelmingSoul = new Archetype({
  base: Kineticist,
  name: 'Overwhelming Soul',
});

export const Psychokineticist = new Archetype({
  base: Kineticist,
  name: 'Psychokineticist',
});
