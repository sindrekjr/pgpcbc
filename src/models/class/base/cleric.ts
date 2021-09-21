import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Cleric = new Class({ name: 'Cleric' });

export const AngelfireApostle = new Archetype({
  base: Cleric,
  name: 'Angelfire Apostle',
});

export const Crusader = new Archetype({
  base: Cleric,
  name: 'Crusader',
});

export const DevilbanePriest = new Archetype({
  base: Cleric,
  name: 'Devilbane Priest',
});

export const Ecclesitheurge = new Archetype({
  base: Cleric,
  name: 'Ecclesitheurge',
});

export const HeraldCaller = new Archetype({
  base: Cleric,
  name: 'Herald Caller',
});

export const PriestofBalance = new Archetype({
  base: Cleric,
  name: 'Priest of Balance',
});
