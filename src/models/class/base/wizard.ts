import { Class } from '../class';
import { Archetype } from '../class.archetype';

export const Wizard = new Class({ name: 'Wizard' });

export const ArcaneBomber = new Archetype({
  base: Wizard,
  name: 'Arcane Bomber',
});

export const Cruromancer = new Archetype({
  base: Wizard,
  name: 'Cruromancer',
});

export const ElementalSpecialist = new Archetype({
  base: Wizard,
  name: 'Elemental Specialist',
});

export const ExploiterWizard = new Archetype({
  base: Wizard,
  name: 'Exploiter Wizard',
});

export const ScrollSavant = new Archetype({
  base: Wizard,
  name: 'Scroll Savant',
});

export const SpellMaster = new Archetype({
  base: Wizard,
  name: 'Spell Master',
});

export const ThassilonianSpecialist = new Archetype({
  base: Wizard,
  name: 'Thassilonian Specialist',
});
