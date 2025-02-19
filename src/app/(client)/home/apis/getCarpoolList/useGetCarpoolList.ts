import { useQuery } from '@tanstack/react-query';

import getCarpoolActive from '@/app/(client)/home/apis/getCarpoolList/getCarpoolActive';
import getCarpoolFast from '@/app/(client)/home/apis/getCarpoolList/getCarpoolFast';
import getCarpoolLow from '@/app/(client)/home/apis/getCarpoolList/getCarpoolLow';
import getCarpoolList from '@/app/(client)/home/apis/getCarpoolList/getCarpoolList';

import { QueryKey } from '@/constants/keys';
import { CarpoolType } from '@/app/(client)/home/apis/getCarpoolList/constants';

import { GetCarpoolListParams } from '@/app/(client)/home/apis/getCarpoolList/types';

const useGetCarpoolList = ({ type }: GetCarpoolListParams) =>
  useQuery({
    queryKey: [QueryKey.CarpoolList, type],
    queryFn: () => {
      switch (type) {
        case CarpoolType.Active:
          return getCarpoolActive();
        case CarpoolType.Fast:
          return getCarpoolFast();
        case CarpoolType.Low:
          return getCarpoolLow();
        default:
          return getCarpoolList();
      }
    },
  });

export default useGetCarpoolList;
