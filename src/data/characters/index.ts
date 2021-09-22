import { Alignment, PremadeCharacter } from '../../models';

const Seelah: PremadeCharacter = {
  id: 0,
  name: 'Seelah',
  ability: {
    strength: 16,
    dexterity: 13,
    constitution: 14,
    intelligence: 10,
    wisdom: 13,
    charisma: 15,
  },
  alignment: Alignment.LG,
  levels: {
    1: {
      class: 'Paladin',
    },
    2: {
      class: 'Paladin',
    },
    3: {
      class: 'Paladin',
    },
  },
};

export const getAllCharacters = (): PremadeCharacter[] => [Seelah];
