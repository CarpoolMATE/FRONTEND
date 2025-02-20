export type CarImageContext = {
  carImage?: File;
  carNumber?: string;
  phoneNumber?: string;
};

export type CarNumberContext = {
  carImage: File;
  carNumber?: string;
  phoneNumber?: string;
};

export type PhoneNumberContext = {
  carImage: File;
  carNumber: string;
  phoneNumber?: string;
};
