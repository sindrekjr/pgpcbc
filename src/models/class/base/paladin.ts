import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Paladin = new Class({ name: 'Paladin' });

export const DivineGuardian = new Archetype({
  base: Paladin,
  name: 'Divine Guardian',
});

export const DivineHunter_Paladin = new Archetype({
  base: Paladin,
  name: 'Divine Hunter',
});

export const DivineScion = new Archetype({
  base: Paladin,
  name: 'Divine Scion',
});

export const Hospitaler = new Archetype({
  base: Paladin,
  name: 'Hospitaler',
});

export const Martyr = new Archetype({
  base: Paladin,
  name: 'Martyr',
});

export const Stonelord = new Archetype({
  base: Paladin,
  name: 'Stonelord',
});

export const WarrioroftheHolyLight = new Archetype({
  base: Paladin,
  name: 'Warrior of the Holy Light',
});
