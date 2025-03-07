type CarpoolInfo = {
  carpoolId: number;
  driverName: string;
  driverImg: string;
  carImg: string;
  carNumber: string;
  departureCoordinate: string;
  latitude: number;
  longitude: number;
  departureTime: string;
  chatLink: string;
  capacity: number;
  cost: number;
  reservationCount: number;
};

type Passengers = {
  passengerName: string;
  passengerImg: string;
};

export type GetCarpoolDetailDto = {
  carpoolInfo: CarpoolInfo;
  passengers: Passengers[];
  amIDriver: boolean;
};

export type ProfileRowProps = {
  url: string;
  text: string;
};
