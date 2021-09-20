export interface Prerequisite {
  type: 'alignment' | 'class' | 'feat' | 'race' | 'skill';
  value: number | boolean;
}
