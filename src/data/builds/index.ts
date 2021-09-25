import { CharacterBuild } from '../../models';

const Dreadful: CharacterBuild = {
  id: 0,
  name: 'Dreadful Crusader',
  abilityScoreIncreases: {
    4: 'strength',
    8: 'strength',
    12: 'strength',
    16: 'strength',
    20: 'charisma',
  },
  classes: {
    1: 'paladin',
    2: 'paladin',
    3: 'paladin',
    4: 'ranger/demonslayer',
    5: 'ranger/demonslayer',
    6: 'cavalier/standard bearer',
    7: 'cavalier/standard bearer',
    8: 'rogue/thug',
    9: 'warpriest/shieldbearer',
    10: 'paladin',
    11: 'ranger/demonslayer',
    12: 'ranger/demonslayer',
    13: 'ranger/demonslayer',
    14: 'ranger/demonslayer',
    15: 'paladin',
    16: 'paladin',
    17: 'paladin',
    18: 'paladin',
    19: 'paladin',
    20: 'paladin',
  },
  feats: {
    1: {
      bonus1: 'Shield Focus',
      general: 'Dodge',
    },
    3: {
      general: 'Power Attack',
    },
    5: {
      bonus1: 'Two-Weapon Fighting',
      general: 'Weapon Focus: Longsword',
    },
    6: {
      bonus1: 'Outflank',
    },
    7: {
      bonus1: 'Dazzling Display',
      general: 'Cornugon Smash',
    },
    9: {
      bonus1: 'Weapon Focus: Heavy Shield',
      general: 'Shatter Defenses',
    },
    11: {
      general: 'Improved Critical',
    },
    13: {
      general: 'Dreadful Carnage',
    },
    14: {
      bonus1: 'Shield Master',
    },
    15: {
      general: 'Bashing Finish',
    },
    17: {
      general: 'Improved Two-Weapon Fighting',
    },
    19: {
      general: 'Greater Two-Weapon Fighting',
    },
  },
  skills: {

  },
};

export const getAllBuilds = (): CharacterBuild[] => [Dreadful];
