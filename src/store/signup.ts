import { create } from "zustand";

interface SignupStore {
  // Form Values
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  canView: boolean;

  // Error States
  idError: boolean;
  passwordError: boolean;
  passwordConfirmError: boolean;
  nameError: boolean;
  passwordLengthError: boolean;
  emailError: boolean;

  // Duplicate Check States
  duplicate: boolean;
  duplicateName: boolean;
  duplicateEmail: boolean;

  // Modal States
  modal: boolean;
  modalMsg: string;

  // Actions
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setPasswordConfirm: (passwordConfirm: string) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setCanView: (canView: boolean) => void;

  setIdError: (error: boolean) => void;
  setPasswordError: (error: boolean) => void;
  setPasswordConfirmError: (error: boolean) => void;
  setNameError: (error: boolean) => void;
  setPasswordLengthError: (error: boolean) => void;
  setEmailError: (error: boolean) => void;

  setDuplicate: (duplicate: boolean) => void;
  setDuplicateName: (duplicate: boolean) => void;
  setDuplicateEmail: (duplicate: boolean) => void;

  setModal: (show: boolean) => void;
  setModalMsg: (msg: string) => void;

  // Validation Methods
  validateId: (value: string) => boolean;
  validateString: (input: string) => boolean;
  validateEmail: (email: string) => boolean;
  checkSpacing: (text: string) => boolean;
  checkCharacterLimit: (text: string) => boolean;
  checkSpecialCharacters: (text: string) => boolean;
  checkAllConditions: (text: string) => void;

  // Duplicate Check Methods
  checkDuplicate: () => Promise<void>;
  checkDuplicateName: () => Promise<void>;
  checkDuplicateEmail: () => Promise<void>;

  // Reset
  reset: () => void;
}

export const useSignupStore = create<SignupStore>((set, get) => ({
  // Initial States
  id: "",
  password: "",
  passwordConfirm: "",
  name: "",
  email: "",
  canView: false,

  idError: false,
  passwordError: false,
  passwordConfirmError: false,
  nameError: false,
  passwordLengthError: false,
  emailError: false,

  duplicate: true,
  duplicateName: true,
  duplicateEmail: true,

  modal: false,
  modalMsg: "",

  // Setters
  setId: (id) => set({ id }),
  setPassword: (password) => set({ password }),
  setPasswordConfirm: (passwordConfirm) => set({ passwordConfirm }),
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setCanView: (canView) => set({ canView }),

  setIdError: (idError) => set({ idError }),
  setPasswordError: (passwordError) => set({ passwordError }),
  setPasswordConfirmError: (passwordConfirmError) =>
    set({ passwordConfirmError }),
  setNameError: (nameError) => set({ nameError }),
  setPasswordLengthError: (passwordLengthError) => set({ passwordLengthError }),
  setEmailError: (emailError) => set({ emailError }),

  setDuplicate: (duplicate) => set({ duplicate }),
  setDuplicateName: (duplicateName) => set({ duplicateName }),
  setDuplicateEmail: (duplicateEmail) => set({ duplicateEmail }),

  setModal: (modal) => set({ modal }),
  setModalMsg: (modalMsg) => set({ modalMsg }),

  // Validation Methods
  validateId: (value) => {
    const alphanumericPattern = /^[A-Za-z0-9]+$/;
    return alphanumericPattern.test(value);
  },

  validateString: (input) => {
    const { setPasswordLengthError } = get();
    setPasswordLengthError(false);

    if (input.length < 3 || input.length > 20) {
      setPasswordLengthError(true);
    }

    const hasLetter = /[a-zA-Z]/.test(input);
    const hasNumber = /[0-9]/.test(input);

    return !(hasLetter && hasNumber);
  },

  validateEmail: (email) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      return false;
    }

    if (email.length > 254) {
      return false;
    }

    const localPart = email.split("@")[0];
    if (localPart.length > 64) {
      return false;
    }

    return true;
  },

  checkSpacing: (text) => {
    return !text.includes(" ");
  },

  checkCharacterLimit: (text) => {
    const koreanOnly = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{1,8}$/;
    return koreanOnly.test(text);
  },

  checkSpecialCharacters: (text) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharRegex.test(text);
  },

  checkAllConditions: (text) => {
    const {
      checkSpacing,
      checkCharacterLimit,
      checkSpecialCharacters,
      setNameError,
    } = get();

    if (
      checkSpacing(text) &&
      checkCharacterLimit(text) &&
      !checkSpecialCharacters(text)
    ) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  },

  // Duplicate Check Methods
  checkDuplicate: async () => {
    const { setModal, setModalMsg, setDuplicate } = get();
    setModal(true);
    setModalMsg("사용 가능한 아이디입니다.");
    setDuplicate(false);
  },

  checkDuplicateName: async () => {
    const { setModal, setModalMsg, setDuplicateName } = get();
    setModal(true);
    setModalMsg("사용 가능한 닉네임입니다.");
    setDuplicateName(false);
  },

  checkDuplicateEmail: async () => {
    const { setModal, setModalMsg, setDuplicateEmail } = get();
    setModal(true);
    setModalMsg("사용 가능한 이메일입니다.");
    setDuplicateEmail(false);
  },

  // Reset all states
  reset: () =>
    set({
      id: "",
      password: "",
      passwordConfirm: "",
      name: "",
      email: "",
      canView: false,
      idError: false,
      passwordError: false,
      passwordConfirmError: false,
      nameError: false,
      passwordLengthError: false,
      emailError: false,
      duplicate: true,
      duplicateName: true,
      duplicateEmail: true,
      modal: false,
      modalMsg: "",
    }),
}));
