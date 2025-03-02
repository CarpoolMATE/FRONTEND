export type PostCarpoolRegistrationParams = {
  departureCoordinate: string;
  latitude: number;
  longitude: number;
  departureTime: string;
  chatLink: string;
  capacity: number;
  cost: number;
};

export type CarpoolRegistrationNextStepProps = {
  onNext: () => void;
};

export type MapModalProps = {
  onClose: () => void;
  onConfirm: (address: string, latitude: number, longitude: number) => void;
  departureCoordinate: string;
};

export type KakaoPlace = {
  place_name: string;
  road_address_name?: string;
  address_name?: string;
  x: string;
  y: string;
};

export type CarpoolRegistrationModalType = 'cancel' | 'error' | '';
