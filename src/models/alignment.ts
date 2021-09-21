export enum Alignment {
  NA = 0,
  LG, NG, CG,
  LN, TN, CN,
  LE, NE, CE,
}

export const getAlignmentName = (alignment: Alignment): string => {
  switch (alignment) {
    case Alignment.LG: return 'Lawful Good';
    case Alignment.NG: return 'Neutral Good';
    case Alignment.CG: return 'Chaotic Good';
    case Alignment.LN: return 'Lawful Neutral';
    case Alignment.TN: return 'True Neutral';
    case Alignment.CN: return 'Chaotic Neutral';
    case Alignment.LE: return 'Lawful Evil';
    case Alignment.NE: return 'Neutral Evil';
    case Alignment.CE: return 'Chaotic Evil';
    default: return 'No Alignment';
  }
};
