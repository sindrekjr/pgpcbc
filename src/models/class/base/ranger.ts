import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Ranger = new Class({ name: 'Ranger' });

export const Demonslayer = new Archetype({
  base: Ranger,
  name: 'Demonslayer',
});

export const EspionageExpert = new Archetype({
  base: Ranger,
  name: 'Espionage Expert',
});

export const Flamewarden = new Archetype({
  base: Ranger,
  name: 'Flamewarden',
});

export const Freebooter = new Archetype({
  base: Ranger,
  name: 'Freebooter',
});

export const Nomad = new Archetype({
  base: Ranger,
  name: 'Nomad',
});

export const Stormwalker = new Archetype({
  base: Ranger,
  name: 'Stormwalker',
});
