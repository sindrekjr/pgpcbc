import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Hunter = new Class({ name: 'Hunter' });

export const ColludingScoundrel = new Archetype({
  base: Hunter,
  name: 'Colluding Scoundrel',
});

export const DivineHound = new Archetype({
  base: Hunter,
  name: 'Divine Hound',
});

export const DivineHunter = new Archetype({
  base: Hunter,
  name: 'Divine Hunter',
});

export const Forester = new Archetype({
  base: Hunter,
  name: 'Forester',
});

export const UrbanHunter = new Archetype({
  base: Hunter,
  name: 'Urban Hunter',
});

export const WanderingMarksman = new Archetype({
  base: Hunter,
  name: 'Wandering Marksman',
});
