import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Bard = new Class({ name: 'Bard' });

export const Archeologist = new Archetype({
  base: Bard,
  name: 'Archeologist',
});

export const BeastTamer = new Archetype({
  base: Bard,
  name: 'Beast Tamer',
});

export const DirgeBard = new Archetype({
  base: Bard,
  name: 'Dirge Bard',
});

export const FlameDancer = new Archetype({
  base: Bard,
  name: 'Flame Dancer',
});

export const Thundercaller = new Archetype({
  base: Bard,
  name: 'Thundercaller',
});

export const TranquilWhisperer = new Archetype({
  base: Bard,
  name: 'Tranquil Whisperer',
});
