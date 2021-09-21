import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Shaman = new Class({ name: 'Shaman' });

export const PossessedShaman = new Archetype({
  base: Shaman,
  name: 'Possessed Shaman',
});

export const ShadowShaman = new Archetype({
  base: Shaman,
  name: 'Shadow Shaman',
});

export const SpiritHunter = new Archetype({
  base: Shaman,
  name: 'Spirit Hunter',
});

export const SpiritWarden = new Archetype({
  base: Shaman,
  name: 'Spirit Warden',
});

export const UnswornShaman = new Archetype({
  base: Shaman,
  name: 'Unsworn Shaman',
});

export const WildlandShaman = new Archetype({
  base: Shaman,
  name: 'Wildland Shaman',
});

export const WitchDoctor = new Archetype({
  base: Shaman,
  name: 'Witch Doctor',
});
