export type PostCarpoolRegistrationParams = {
  departureCoordinate: string;
  latitude: string;
  longitude: string;
  departureTime: string;
  chatLink: string;
  capacity: number;
  cost: number;
};

export type CarpoolRegistrationNextStepProps = {
  onNext: () => void;
};
