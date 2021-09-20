import { Class } from '../class';

export const Bard = new Class({ name: 'Bard' });

export const Archeologist = Bard.createArchetype('Archeologist');

export const BeastTamer = Bard.createArchetype('Beast Tamer');

export const DirgeBard = Bard.createArchetype('Dirge Bard');

export const FlameDancer = Bard.createArchetype('Flame Dancer');

export const Thundercaller = Bard.createArchetype('Thundercaller');

export const TranquilWhisperer = Bard.createArchetype('Tranquil Whisperer');
