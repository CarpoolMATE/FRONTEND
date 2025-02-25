export type GetProfileCarpoolListDto = {
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
  createAt: string;
};

export type GetProfileListType = 'history' | 'driveHis';
