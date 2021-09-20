import { Class } from '../class';

export const Witch = new Class({ name: 'Witch' });

export const ElementalWitch = Witch.createArchetype('Elemental Witch');

export const Hagbound = Witch.createArchetype('Hagbound');

export const HexChanneler = Witch.createArchetype('Hex Channeler');

export const LeyLineGuardian = Witch.createArchetype('Ley Line Guardian');

export const StigmatizedWitch = Witch.createArchetype('Archeologist');

export const WitchoftheVeil = Witch.createArchetype('Witch of the Veil');
