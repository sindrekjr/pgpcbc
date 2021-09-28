import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { Archetype, Class } from '../../../models';
import {
  archetypesState,
  prestigeClassListSelector,
  primaryClassListSelector,
} from '../../../state';
import { TableCell, TableSelect } from '../table';

export interface ClassCellProps {
  cl: Class;
  classLevel: number;
  onChange?: (newClassId: number) => void;
}

export const ClassCell: FC<ClassCellProps> = ({ cl, onChange }) => {
  const { id } = cl;
  const base = (cl as Archetype).base || id;
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
          onChange={e => onChange && onChange(parseInt(e.target.value) || id)}
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
            value={id}
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
