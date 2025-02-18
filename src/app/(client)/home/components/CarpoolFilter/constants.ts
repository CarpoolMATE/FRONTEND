import { SortOption } from '@/app/(client)/home/constants';
import { CarpoolType } from '@/app/(client)/home/apis/getCarpoolList/constants';

export const SORT_OPTIONS = [
  { label: SortOption.FASTEST, value: CarpoolType.Fast },
  { label: SortOption.LOWEST_FARE, value: CarpoolType.Low },
];

export enum CarpoolSearchKey {
  Filter = 'filter',
}
