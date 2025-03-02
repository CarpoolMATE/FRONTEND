import { ReactNode } from 'react';

export type DeleteCarpoolType = 'deleteCarpool' | 'cancelCarpool';

export type DeleteModalValues = {
  title: string;
  text: ReactNode;
};
