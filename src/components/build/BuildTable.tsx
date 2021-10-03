import React, { FC, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import { Build, Character } from '../../models';
import { buildState, raceState } from '../../state';
import { LevelRow } from './level';

const Table = styled.table`
  th {
    font-family: sans-serif;
    font-size: ${rem(10)};
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

  const updateBuild = useCallback((data: Partial<Build>) => {
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
  }, [build, setBuild]);

  const getClassesAtLevel = useCallback((level: number) => (
    Object.values(classes).slice(0, level)
  ), [classes]);

  const getAbilityScoreIncreasesAtLevel = useCallback((level: string) => (
    Object.keys(abilityScoreIncreases).filter(key => (
      parseInt(key) <= parseInt(level)
    )).reduce((increases, iLevel) => ({
      ...increases,
      [iLevel]: abilityScoreIncreases[iLevel],
    }), {})
  ), [abilityScoreIncreases]);

  return (
    <Table>
      <thead>
        <tr>
          <th />
          <th>Class</th>
          <th>Archetype</th>
          {Object.keys(abilityScores).map(a => <th key={a}>{a.toUpperCase()}</th>)}
          <th>Feats (general)</th>
          <th colSpan={2}>Feats (bonus)</th>
          <th>BAB</th>
          <th>Fort</th>
          <th>Ref</th>
          <th>Will</th>
          <th>Traits</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(classes).map((
          [level, classId],
        ) => (
          <LevelRow
            key={level}
            race={race}
            level={parseInt(level)}
            classId={classId}
            classes={getClassesAtLevel(parseInt(level))}
            abilityScores={abilityScores}
            abilityScoreIncreases={getAbilityScoreIncreasesAtLevel(level)}
            feats={feats[level]}
            updateBuild={updateBuild}
          />
        ))}
      </tbody>
    </Table>
  );
};
