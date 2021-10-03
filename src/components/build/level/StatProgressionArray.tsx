import React, { FC, useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import { calculateBaseAttackBonus, calculateSavingThrowBonus, SavingThrow } from '../../../models';
import { classListState } from '../../../state';
import { TableCell } from '../table';

const StatCell = styled(TableCell)`
  border: 0;
  text-align: center;
  width: ${rem(21)};
`;

export interface StatProgressionArrayProps {
  classIds: number[];
  modifiers: Record<SavingThrow, number>;
}

export const StatProgressionArray: FC<StatProgressionArrayProps> = ({ classIds, modifiers }) => {
  const uniqueClasses = useRecoilValue(classListState).filter(({ id }) => (
    classIds.includes(id)
  ));

  const calculateStats = useCallback(() => (
    uniqueClasses.reduce((stats, { id, progression }) => {
      const { baseAttackBonus, fortitude, reflex, will } = progression;
      const classLevels = classIds.filter(classId => id === classId).length;
      stats.bab += calculateBaseAttackBonus(classLevels, baseAttackBonus);
      stats.fort += calculateSavingThrowBonus(classLevels, fortitude);
      stats.ref += calculateSavingThrowBonus(classLevels, reflex);
      stats.will += calculateSavingThrowBonus(classLevels, will);
      return stats;
    }, {
      ...modifiers,
      bab: 0,
    })
  ), [classIds, modifiers, uniqueClasses]);

  const { bab, fort, ref, will } = useMemo(() => calculateStats(), [calculateStats]);

  return (
    <>
      <StatCell aria-label={`base attack bonus, ${bab}`} title="base attack bonus">
        {bab}
      </StatCell>
      <StatCell aria-label={`fortitude, ${fort}`} title="fortitude">
        {fort}
      </StatCell>
      <StatCell aria-label={`reflex, ${ref}`} title="reflex">
        {ref}
      </StatCell>
      <StatCell aria-label={`will, ${will}`} title="will">
        {will}
      </StatCell>
    </>
  );
};
