import { Character } from '../models';
import { characters } from './data';

export const getAllCharacters = (): Character[] => [...characters];
