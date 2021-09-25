import { Alignment, Character } from '../../models';

const Seelah: Character = {
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
  alignment: Alignment.LG,
  builds: [
    0,
  ],
};

export const getAllCharacters = (): Character[] => [Seelah];
