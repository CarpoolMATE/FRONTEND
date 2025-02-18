import getCarpoolActive from '@/app/(client)/home/apis/getCarpoolList/getCarpoolActive';
import getCarpoolFast from '@/app/(client)/home/apis/getCarpoolList/getCarpoolFast';
import getCarpoolList from '@/app/(client)/home/apis/getCarpoolList/getCarpoolList';
import getCarpoolLow from '@/app/(client)/home/apis/getCarpoolList/getCarpoolLow';

import { CarpoolDto } from '@/types/dtos/carpool';

export enum CarpoolType {
  Default = 'default',
  Active = 'active',
  Fast = 'fast',
  Low = 'low',
}

export const CARPOOL_APIS: Record<CarpoolType, Promise<CarpoolDto[]>> = {
  [CarpoolType.Default]: getCarpoolList(),
  [CarpoolType.Active]: getCarpoolActive(),
  [CarpoolType.Fast]: getCarpoolFast(),
  [CarpoolType.Low]: getCarpoolLow(),
};
