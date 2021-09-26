import { Race } from '../../../models';

import human from './human.race.json';
import elf from './elf.race.json';
import dwarf from './dwarf.race.json';
import gnome from './gnome.race.json';
import halfling from './halfling.race.json';
import halfElf from './halfElf.race.json';
import halfOrc from './halfOrc.race.json';
import aasimar from './aasimar.race.json';
import tiefling from './tiefling.race.json';
import oread from './oread.race.json';
import dhampir from './dhampir.race.json';
import kitsune from './kitsune.race.json';
import succubus from './succubus.race.json';

export const races: Race[] = [
  ...human,
  ...elf,
  ...dwarf,
  ...gnome,
  ...halfling,
  ...halfElf,
  ...halfOrc,
  ...aasimar,
  ...tiefling,
  ...oread,
  ...dhampir,
  ...kitsune,
  ...succubus,
];
