import { Alignment, PremadeCharacter } from '../../models';

const Seelah: PremadeCharacter = {
  id: 0,
  name: 'Seelah',
  abilityScores: {
    strength: 16,
    dexterity: 13,
    constitution: 14,
    intelligence: 10,
    wisdom: 13,
    charisma: 15,
  },
  abilityScoreIncreases: {
    4: 'charisma',
    8: 'strength',
    12: 'strength',
    16: undefined,
    20: undefined,
  },
  alignment: Alignment.LG,
  classes: [
    'Paladin',
    'Ranger',
    'Ranger',
    'Paladin',
    'Paladin',
    'Cavalier',
    'Cavalier',
    'Paladin',
    'Paladin',
    'Paladin',
    'Paladin',
    'Warpriest',
  ],
};

export const getAllCharacters = (): PremadeCharacter[] => [Seelah];
