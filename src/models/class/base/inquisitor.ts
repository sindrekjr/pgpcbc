import { Class } from '../class';

export const Inquisitor = new Class({ name: 'Inquisitor' });

export const FaithHunter = Inquisitor.createArchetype('Faith Hunter');

export const Judge = Inquisitor.createArchetype('Judge');

export const MonsterTactician = Inquisitor.createArchetype('Monster Tactician');

export const SacredHuntsmaster = Inquisitor.createArchetype('Sacred Huntsmaster');

export const SactifiedSlayer = Inquisitor.createArchetype('Sactified Slayer');

export const TacticalLeader = Inquisitor.createArchetype('Tactical Leader');
