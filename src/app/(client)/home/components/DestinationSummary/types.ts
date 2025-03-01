import { CarpoolDto } from '@/types/dtos/carpool';

export type DestinationSummaryProps = {
  data: Pick<
    CarpoolDto,
    | 'departureCoordinate'
    | 'departureTime'
    | 'capacity'
    | 'cost'
    | 'reservationCount'
  >;
  showMapIcon?: boolean;
};
