import { create } from 'zustand';

interface VehicleInfo {
  // 이미지 정보
  image: File | null;
  imageUrl: string;

  // 전화번호 정보
  phone1: string;
  phone2: string;
  phone3: string;

  // 차량번호 정보
  vehicleNumber1: string;
  vehicleNumber2: string;
  vehicleNumber3: string;
}

interface VehicleActions {
  // 이미지 관련 액션
  setImage: (file: File) => void;
  clearImage: () => void;

  // 전화번호 관련 액션
  setPhone: (index: 1 | 2 | 3, value: string) => void;
  clearPhone: (index: 1 | 2 | 3) => void;

  // 차량번호 관련 액션
  setVehicleNumber: (index: 1 | 2 | 3, value: string) => void;
  clearVehicleNumber: (index: 1 | 2 | 3) => void;

  // 전체 초기화
  resetAll: () => void;
}

const initialState: VehicleInfo = {
  image: null,
  imageUrl: '',
  phone1: '',
  phone2: '',
  phone3: '',
  vehicleNumber1: '',
  vehicleNumber2: '',
  vehicleNumber3: '',
};

export const useVehicleStore = create<VehicleInfo & VehicleActions>((set) => ({
  ...initialState,

  // 이미지 관련 액션
  setImage: (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    set({ image: file, imageUrl });
  },

  clearImage: () => {
    set((state) => {
      if (state.imageUrl) {
        URL.revokeObjectURL(state.imageUrl);
      }
      return { image: null, imageUrl: '' };
    });
  },

  // 전화번호 관련 액션
  setPhone: (index, value) => {
    set({ [`phone${index}`]: value });
  },

  clearPhone: (index) => {
    set({ [`phone${index}`]: '' });
  },

  // 차량번호 관련 액션
  setVehicleNumber: (index, value) => {
    set({ [`vehicleNumber${index}`]: value });
  },

  clearVehicleNumber: (index) => {
    set({ [`vehicleNumber${index}`]: '' });
  },

  // 전체 초기화
  resetAll: () => {
    set((state) => {
      if (state.imageUrl) {
        URL.revokeObjectURL(state.imageUrl);
      }
      return initialState;
    });
  },
}));
