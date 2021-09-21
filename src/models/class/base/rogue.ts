import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Rogue = new Class({ name: 'Rogue' });

export const EldritchScoundrel = new Archetype({
  base: Rogue,
  name: 'Eldritch Scoundrel',
});

export const KnifeMaster = new Archetype({
  base: Rogue,
  name: 'Knife Master',
});

export const MasterofAll = new Archetype({
  base: Rogue,
  name: 'Master of All',
});

export const Rowdy = new Archetype({
  base: Rogue,
  name: 'Rowdy',
});

export const SylvanTrickster = new Archetype({
  base: Rogue,
  name: 'Sylvan Trickster',
});

export const Thug = new Archetype({
  base: Rogue,
  name: 'Thug',
});

export const UndergroundChemist = new Archetype({
  base: Rogue,
  name: 'Underground Chemist',
});
