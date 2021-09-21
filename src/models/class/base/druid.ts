import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Druid = new Class({ name: 'Druid' });

export const BlightDruid = new Archetype({
  base: Druid,
  name: 'Blight Druid',
});

export const DefenderoftheTrueWorld = new Archetype({
  base: Druid,
  name: 'Defender of the True World',
});

export const Drovier = new Archetype({
  base: Druid,
  name: 'Drovier',
});

export const ElementalRampager = new Archetype({
  base: Druid,
  name: 'Elemental Rampager',
});

export const Feyspeaker = new Archetype({
  base: Druid,
  name: 'Feyspeaker',
});

export const PrimalDruid = new Archetype({
  base: Druid,
  name: 'Primal Druid',
});
