import { API_ROUTES } from '@/constants/routes';

import { fetchDelete, fetchPost } from '@/apis/fetch';

import {
  DeleteCarpoolType,
  DeleteModalValues,
} from '@/app/(client)/reservation-detail/apis/deleteCarpool/types';

export const DELETE_CARPOOL_ROUTE_CLASSES: Record<DeleteCarpoolType, string> = {
  cancelCarpool: API_ROUTES.CARPOOL.CANCEL,
  deleteCarpool: API_ROUTES.CARPOOL.DELETE,
};

export const DELETE_CARPOOL_FETCH_CALSSES: Record<
  DeleteCarpoolType,
  <T>(url: string) => Promise<T>
> = {
  cancelCarpool: fetchPost,
  deleteCarpool: fetchDelete,
};

export const DELETE_CARPOOL_MODAL_VALUES_CLASSES: Record<
  DeleteCarpoolType,
  DeleteModalValues
> = {
  deleteCarpool: {
    title: '카풀 예약을 취소하시겠어요?',
    text: (
      <span>
        패신저에게 고지하셨나요?
        <br />
        이미 입금을 받으셨다면 환불처리를 진행해주세요.
        <br />
        <br />
        패신저가 존재하는 상태에서 2회 이상 취소시,
        <br />
        추후 서비스를 더 이상 이용하실 수 없습니다.
        <br />
        <br />
        그래도 취소하시겠습니까?
      </span>
    ),
  },
  cancelCarpool: {
    title: '예약을 취소하시겠어요?',
    text: (
      <span>
        반복적이고 고의적인 카풀 예약 취소는
        <br />
        추후 서비스 이용에 제한됩니다.
      </span>
    ),
  },
};
