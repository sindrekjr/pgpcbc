import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { Heritage } from '../../models';
import { baseRaceListSelector, raceState, racialHeritagesState } from '../../state';
import { Field } from './Field';

export interface CharacterRaceProps {
  raceId: number;
  onChange: (newRaceId: number) => void;
}

export const CharacterRace: FC<CharacterRaceProps> = ({ raceId, onChange }) => {
  const race = useRecoilValue(raceState(raceId));
  const base = (race as Heritage).base || raceId;
  const races = useRecoilValue(baseRaceListSelector);
  const heritages = useRecoilValue(racialHeritagesState(base));
  const hasRacialHeritages = heritages.length > 0;

  return (
    <>
      <Field>
        <select
          name="race"
          value={base}
          onChange={({ target: { value }}) => onChange(parseInt(value))}
        >
          {races.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <label htmlFor="race">Race</label>
      </Field>
      {hasRacialHeritages && (
        <Field>
          <select
            name="heritage"
            value={raceId}
            onChange={({ target: { value }}) => onChange(parseInt(value) || base)}
          >
            <option />
            {heritages.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <label htmlFor="heritage">Heritage</label>
        </Field>
      )}
    </>
  );
};
