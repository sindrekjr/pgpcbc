import React, { FC, useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rem } from 'polished';

import { calculateBaseAttackBonus, calculateSavingThrowBonus } from '../../../models';
import { classListState } from '../../../state';
import { TableCell } from '../table';

const StatCell = styled(TableCell)`
  text-align: center;
  width: ${rem(25)};
`;

export interface StatProgressionArrayProps {
  classIds: number[];
}

export const StatProgressionArray: FC<StatProgressionArrayProps> = ({ classIds }) => {
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
      bab: 0,
      fort: 0,
      ref: 0,
      will: 0,
    })
  ), [classIds, uniqueClasses]);

  const { bab, fort, ref, will } = useMemo(() => calculateStats(), [calculateStats]);

  return (
    <>
      <StatCell>
        {bab}
      </StatCell>
      <StatCell>
        {fort}
      </StatCell>
      <StatCell>
        {ref}
      </StatCell>
      <StatCell>
        {will}
      </StatCell>
    </>
  );
};
