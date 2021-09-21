import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Arcanist = new Class({ name: 'Arcanist' });

export const BrownFurTransmuter = new Archetype({
  base: Arcanist,
  name: 'Brown Fur Transmuter',
});

export const EldritchFont = new Archetype({
  base: Arcanist,
  name: 'Eldritch Font',
});

export const NatureMage = new Archetype({
  base: Arcanist,
  name: 'Nature Mage',
});

export const PhantasmalMage = new Archetype({
  base: Arcanist,
  name: 'Phantasmal Mage',
});

export const UnletteredArcanist = new Archetype({
  base: Arcanist,
  name: 'Unlettered Arcanist',
});

export const WhiteMage = new Archetype({
  base: Arcanist,
  name: 'White Mage',
});
