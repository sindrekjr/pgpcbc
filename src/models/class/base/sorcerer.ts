import { Class } from '../class';

export const Sorcerer = new Class({ name: 'Sorcerer' });

export const Crossblooded = Sorcerer.createArchetype('Crossblooded');

export const EmpyrealSorcerer = Sorcerer.createArchetype('Empyreal Sorcerer');

export const NineTailedHeir = Sorcerer.createArchetype('Nine Tailed Heir');

export const OverwhelmingMage = Sorcerer.createArchetype('Overwhelming Mage');

export const SageSorcerer = Sorcerer.createArchetype('Sage Sorcerer');

export const SeekerSorcerer = Sorcerer.createArchetype('Seeker');

export const SylvanSorcerer = Sorcerer.createArchetype('Sylvan Sorcerer');
