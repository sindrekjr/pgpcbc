import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Skald = new Class({ name: 'Skald' });

export const BattleScion = new Archetype({
  base: Skald,
  name: 'Battle Scion',
});

export const BattleSinger = new Archetype({
  base: Skald,
  name: 'Battle Singer',
});

export const CourtPoet = new Archetype({
  base: Skald,
  name: 'Court Poet',
});

export const DemonDancer = new Archetype({
  base: Skald,
  name: 'Demon Dancer',
});

export const HeraldoftheHorn = new Archetype({
  base: Skald,
  name: 'Herald of the Horn',
});

export const HuntCaller = new Archetype({
  base: Skald,
  name: 'Hunt Caller',
});
