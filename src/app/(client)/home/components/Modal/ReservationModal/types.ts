import { CarpoolDto } from '@/types/dtos/carpool';

export type ReservationModalProps = {
  data: CarpoolDto;
  onClose: () => void;
};
