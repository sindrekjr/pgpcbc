import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { classListState } from '../../state/class.state';
import { TableCell } from './TableCell';
import { TableSelect } from './TableSelect';

export interface ClassTableCellProps {
  classId: number;
  onChange?: (newClassId: number) => void;
}

export const ClassTableCell: FC<ClassTableCellProps> = ({ classId, onChange }) => {
  const classes = useRecoilValue(classListState);

  return (
    <TableCell>
      <TableSelect name="class" onChange={e => console.log(e)}>
        {classes.map(({ id, name }) => (
          <option key={id} value={id} selected={id === classId}>
            {name}
          </option>
        ))}
      </TableSelect>
    </TableCell>
  );
};
