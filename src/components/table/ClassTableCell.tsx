import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { classListState } from '../../state/class.state';
import { TableCell } from './TableCell';
import { TableSelect } from './TableSelect';

export interface ClassTableCellProps {
  classId: number;
  classCount?: number;
  onChange?: (newClassId: number) => void;
}

export const ClassTableCell: FC<ClassTableCellProps> = ({ classId, classCount, onChange }) => {
  const classes = useRecoilValue(classListState);

  return (
    <TableCell>
      <TableSelect name="class" onChange={e => onChange && onChange(parseInt(e.target.value))}>
        {classes.map(({ id, name }) => (
          <option key={id} value={id} selected={id === classId}>
            {`${name}${classCount && id === classId ? ` (${classCount})` : ''}`}
          </option>
        ))}
      </TableSelect>
    </TableCell>
  );
};
