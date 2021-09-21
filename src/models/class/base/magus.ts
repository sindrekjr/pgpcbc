import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Magus = new Class({ name: 'Magus' });

export const ArcaneRider = new Archetype({
  base: Magus,
  name: 'Arcane Rider',
});

export const ArmoredBattlemage = new Archetype({
  base: Magus,
  name: 'Armored Battlemage',
});

export const EldritchArcher = new Archetype({
  base: Magus,
  name: 'Eldritch Archer',
});

export const EldritchScion = new Archetype({
  base: Magus,
  name: 'Eldritch Scion',
});

export const Hexcrafter = new Archetype({
  base: Magus,
  name: 'Hexcrafter',
});

export const SpellDancer = new Archetype({
  base: Magus,
  name: 'Spell Dancer',
});

export const SwordSaint = new Archetype({
  base: Magus,
  name: 'Sword Saint',
});
