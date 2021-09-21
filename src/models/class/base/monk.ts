import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Monk = new Class({ name: 'Monk' });

export const QuarterstaffMaster = new Archetype({
  base: Monk,
  name: 'Quarterstaff Master',
});

export const ScaledFist = new Archetype({
  base: Monk,
  name: 'Scaled Fist',
});

export const Sensei = new Archetype({
  base: Monk,
  name: 'Sensei',
});

export const Sohei = new Archetype({
  base: Monk,
  name: 'Sohei',
});

export const StudentofStone = new Archetype({
  base: Monk,
  name: 'Student of Stone',
});

export const TraditionalMonk = new Archetype({
  base: Monk,
  name: 'Traditional Monk',
});

export const ZenArcher = new Archetype({
  base: Monk,
  name: 'Zen Archer',
});
