import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { Archetype } from '../../models';
import {
  archetypesState,
  classState,
  prestigeClassListSelector,
  primaryClassListSelector,
} from '../../state';
import { TableCell } from './TableCell';
import { TableSelect } from './TableSelect';

export interface ClassTableCellProps {
  classId: number;
  classCount?: number;
  onChange?: (newClassId: number) => void;
}

export const ClassTableCell: FC<ClassTableCellProps> = ({ classId, onChange }) => {
  const cl = useRecoilValue(classState(classId));
  const base = (cl as Archetype).base || classId;
  const primaryClasses = useRecoilValue(primaryClassListSelector);
  const archetypes = useRecoilValue(archetypesState(base));
  const prestigeClasses = useRecoilValue(prestigeClassListSelector);
  const hasArchetypes = archetypes.length > 0;

  return (
    <>
      <TableCell>
        <TableSelect
          name="class"
          value={base}
          onChange={e => onChange && onChange(parseInt(e.target.value) || classId)}
        >
          <option />
          {[...primaryClasses, ...prestigeClasses].map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </TableSelect>
      </TableCell>
      <TableCell disabled={!hasArchetypes}>
        {hasArchetypes && (
          <TableSelect
            name="archetype"
            value={classId}
            onChange={({ target: { value }}) => onChange && onChange(parseInt(value) || base)}
          >
            <option />
            {archetypes.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </TableSelect>
        )}
      </TableCell>
    </>
  );
};
