import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Cavalier = new Class({ name: 'Cavalier' });

export const BeastRider = new Archetype({
  base: Cavalier,
  name: 'Beast Rider',
});

export const CavalierofthePaw = new Archetype({
  base: Cavalier,
  name: 'Cavalier of the Paw',
});

export const DiscipleofthePike = new Archetype({
  base: Cavalier,
  name: 'Disciple of the Pike',
});

export const FearsomeLeader = new Archetype({
  base: Cavalier,
  name: 'Fearsome Leader',
});

export const Gendarme = new Archetype({
  base: Cavalier,
  name: 'Gendarme',
});

export const KnightoftheWall = new Archetype({
  base: Cavalier,
  name: 'Knight of the Wall',
});

export const StandardBearer = new Archetype({
  base: Cavalier,
  name: 'Standard Bearer',
});
