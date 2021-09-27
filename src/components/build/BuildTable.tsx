import React, { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { buildState } from '../../state/build.state';
import { Build, Character } from '../../models';
import { raceState } from '../../state';
import { LevelRow } from './level';

const Table = styled.table`
  width: 100%;

  th {
    text-align: left;
  }
`;

export interface BuildTableProps {
  buildId: number;
  character: Character;
}

export const BuildTable: FC<BuildTableProps> = ({ buildId, character }) => {
  const { abilityScores, race: raceId } = character;

  const [build, setBuild] = useRecoilState(buildState(buildId));
  const race = useRecoilValue(raceState(raceId));

  if (!build) return null;

  const {
    abilityScoreIncreases,
    classes,
    feats,
    skills,
  } = build;

  const updateBuild = (data: Partial<Build>) => {
    console.log('Updating build...', data);
    setBuild({
      ...build,
      ...data,
      abilityScoreIncreases: {
        ...abilityScoreIncreases,
        ...data.abilityScoreIncreases,
      },
      classes: {
        ...classes,
        ...data.classes,
      },
      feats: {
        ...feats,
        ...data.feats,
      },
      skills: {
        ...skills,
        ...data.skills,
      },
    });
  };

  return (
    <Table>
      <thead>
        <tr>
          <th />
          <th>Class</th>
          <th>Archetype</th>
          <th colSpan={Object.keys(abilityScores).length} />
          <th>Feats (general)</th>
          <th colSpan={2}>Feats (bonus)</th>
          <th>Traits</th>
        </tr>
      </thead>
      <tbody>
        {(Object.entries(classes) as [string, number][]).map((
          [level, classId],
        ) => (
          <LevelRow
            key={level}
            abilityScores={abilityScores}
            classId={classId}
            build={build}
            level={parseInt(level)}
            race={race}
            updateBuild={updateBuild}
          />
        ))}
      </tbody>
    </Table>
  );
};
