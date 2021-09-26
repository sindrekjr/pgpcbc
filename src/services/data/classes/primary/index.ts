import { Class } from '../../../../models';

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


export const primaryClasses: Class[] = [
  alchemist, ...alchemist.archetypes,
  arcanist, ...arcanist.archetypes,
  barbarian, ...barbarian.archetypes,
  bard, ...bard.archetypes,
  bloodrager, ...bloodrager.archetypes,
  cavalier, ...cavalier.archetypes,
  cleric, ...cleric.archetypes,
  druid, ...druid.archetypes,
  fighter, ...fighter.archetypes,
  hunter, ...hunter.archetypes,
  inquisitor, ...inquisitor.archetypes,
  kineticist, ...kineticist.archetypes,
  magus, ...magus.archetypes,
  monk, ...monk.archetypes,
  oracle, ...oracle.archetypes,
  paladin, ...paladin.archetypes,
  ranger, ...ranger.archetypes,
  rogue, ...rogue.archetypes,
  shaman, ...shaman.archetypes,
  skald, ...skald.archetypes,
  slayer, ...slayer.archetypes,
  sorcerer, ...sorcerer.archetypes,
  warpriest, ...warpriest.archetypes,
  witch, ...witch.archetypes,
  wizard, ...wizard.archetypes,
];
