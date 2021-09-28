import { Archetype, Class, PrimaryClass } from '../../../../models';

import alchemist from './alchemist.class.json';
import arcanist from './arcanist.class.json';
import barbarian from './barbarian.class.json';
import bard from './bard.class.json';
import bloodrager from './bloodrager.class.json';
import cavalier from './cavalier.class.json';
import cleric from './cleric.class.json';
import druid from './druid.class.json';
import fighter from './fighter.class.json';
import hunter from './hunter.class.json';
import inquisitor from './inquisitor.class.json';
import kineticist from './kineticist.class.json';
import magus from './magus.class.json';
import monk from './monk.class.json';
import oracle from './oracle.class.json';
import paladin from './paladin.class.json';
import ranger from './ranger.class.json';
import rogue from './rogue.class.json';
import shaman from './shaman.class.json';
import skald from './skald.class.json';
import slayer from './slayer.class.json';
import sorcerer from './sorcerer.class.json';
import warpriest from './warpriest.class.json';
import witch from './witch.class.json';
import wizard from './wizard.class.json';

const getPrimaryClass = (
  data: {
    primary: Class,
    archetypes: Partial<Archetype>[],
  },
): PrimaryClass => ({
  ...data.primary,
  archetypes: data.archetypes.map(({ id }) => id as number),
});

const mergeClassArchetypes = (
  primary: Class,
  archetypes: Partial<Archetype>[],
): Archetype[] => (
  archetypes.map(archetype => (
    {
      base: primary.id,
      ...primary,
      ...archetype,
    }
  ))
);

export const primaryClasses: PrimaryClass[] = [
  getPrimaryClass(alchemist),
  getPrimaryClass(arcanist),
  getPrimaryClass(barbarian),
  getPrimaryClass(bard),
  getPrimaryClass(bloodrager),
  getPrimaryClass(cavalier),
  getPrimaryClass(cleric),
  getPrimaryClass(druid),
  getPrimaryClass(fighter),
  getPrimaryClass(hunter),
  getPrimaryClass(inquisitor),
  getPrimaryClass(kineticist),
  getPrimaryClass(magus),
  getPrimaryClass(monk),
  getPrimaryClass(oracle),
  getPrimaryClass(paladin),
  getPrimaryClass(ranger),
  getPrimaryClass(rogue),
  getPrimaryClass(shaman),
  getPrimaryClass(skald),
  getPrimaryClass(slayer),
  getPrimaryClass(sorcerer),
  getPrimaryClass(warpriest),
  getPrimaryClass(witch),
  getPrimaryClass(wizard),
];

export const archetypes: Archetype[] = [
  ...mergeClassArchetypes(alchemist.primary, alchemist.archetypes),
  ...mergeClassArchetypes(arcanist.primary, arcanist.archetypes),
  ...mergeClassArchetypes(barbarian.primary, barbarian.archetypes),
  ...mergeClassArchetypes(bard.primary, bard.archetypes),
  ...mergeClassArchetypes(bloodrager.primary, bloodrager.archetypes),
  ...mergeClassArchetypes(cavalier.primary, cavalier.archetypes),
  ...mergeClassArchetypes(cleric.primary, cleric.archetypes),
  ...mergeClassArchetypes(druid.primary, druid.archetypes),
  ...mergeClassArchetypes(fighter.primary, fighter.archetypes),
  ...mergeClassArchetypes(hunter.primary, hunter.archetypes),
  ...mergeClassArchetypes(inquisitor.primary, inquisitor.archetypes),
  ...mergeClassArchetypes(kineticist.primary, kineticist.archetypes),
  ...mergeClassArchetypes(magus.primary, magus.archetypes),
  ...mergeClassArchetypes(monk.primary, monk.archetypes),
  ...mergeClassArchetypes(oracle.primary, oracle.archetypes),
  ...mergeClassArchetypes(paladin.primary, paladin.archetypes),
  ...mergeClassArchetypes(ranger.primary, ranger.archetypes),
  ...mergeClassArchetypes(rogue.primary, rogue.archetypes),
  ...mergeClassArchetypes(shaman.primary, shaman.archetypes),
  ...mergeClassArchetypes(skald.primary, skald.archetypes),
  ...mergeClassArchetypes(slayer.primary, slayer.archetypes),
  ...mergeClassArchetypes(sorcerer.primary, sorcerer.archetypes),
  ...mergeClassArchetypes(warpriest.primary, warpriest.archetypes),
  ...mergeClassArchetypes(witch.primary, witch.archetypes),
  ...mergeClassArchetypes(wizard.primary, wizard.archetypes),
];
