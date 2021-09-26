export type Ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

export type AbilityScores = Record<Ability, number>;

export const getAbilityName = (ability: Ability): string => {
  switch (ability) {
    case 'str': return 'strength';
    case 'dex': return 'dexterity';
    case 'con': return 'constitution';
    case 'int': return 'intelligence';
    case 'wis': return 'wisdom';
    case 'cha': return 'charisma';
  }
};

export const resolveAbilityScoreModifier = (score: number): number => Math.floor((score - 10) / 2);
