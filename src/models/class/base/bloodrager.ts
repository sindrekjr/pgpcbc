import { Class } from '../class';

export const Bloodrager = new Class({ name: 'Bloodrager' });

export const Bloodrider = Bloodrager.createArchetype('Bloodrider');

export const Greenrager = Bloodrager.createArchetype('Greenrager');

export const MixedBloodRager = Bloodrager.createArchetype('Mixed-Blood Rager');

export const Primalist = Bloodrager.createArchetype('Primalist');

export const ReformedFiend = Bloodrager.createArchetype('Reformed Fiend');

export const Spelleater = Bloodrager.createArchetype('Spelleater');

export const Steelblood = Bloodrager.createArchetype('Steelblood');
