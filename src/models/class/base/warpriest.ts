import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Warpriest = new Class({ name: 'Warpriest' });

export const ChampionoftheFaith = new Archetype({
  base: Warpriest,
  name: 'Champion of the Faith',
});

export const CultLeader = new Archetype({
  base: Warpriest,
  name: 'Cult Leader',
});

export const Disenchanter = new Archetype({
  base: Warpriest,
  name: 'Disenchanter',
});

export const FeralChampion = new Archetype({
  base: Warpriest,
  name: 'Feral Champion',
});

export const Proclaimer = new Archetype({
  base: Warpriest,
  name: 'Proclaimer',
});

export const Shieldbearer = new Archetype({
  base: Warpriest,
  name: 'Shieldbearer',
});
