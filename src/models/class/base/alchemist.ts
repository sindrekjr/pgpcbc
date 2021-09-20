import { Class } from '../class';

export const Alchemist = new Class({ name: 'Alchemist' });

export const Chirurgeon = Alchemist.createArchetype('Chirurgeon');

export const Grenadier = Alchemist.createArchetype('Grenadier');

export const IncenseSynthesizer = Alchemist.createArchetype('Incense Synthesizer');

export const Metamorph = Alchemist.createArchetype('Metamorph');

export const Preservationist = Alchemist.createArchetype('Preservationist');

export const Vivisectionist = Alchemist.createArchetype('Vivisectionist');
