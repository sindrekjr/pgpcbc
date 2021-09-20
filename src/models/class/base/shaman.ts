import { Class } from '../class';

export const Shaman = new Class({ name: 'Shaman' });

export const PossessedShaman = Shaman.createArchetype('Possessed Shaman');

export const ShadowShaman = Shaman.createArchetype('Shadow Shaman');

export const SpiritHunter = Shaman.createArchetype('Spirit Hunter');

export const SpiritWarden = Shaman.createArchetype('Spirit Warden');

export const UnswornShaman = Shaman.createArchetype('Unsworn Shaman');

export const WildlandShaman = Shaman.createArchetype('Wildland Shaman');

export const WitchDoctor = Shaman.createArchetype('Witch Doctor');
