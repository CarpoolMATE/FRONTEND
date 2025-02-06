// components/Modal.tsx
interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-0 w-full h-full bg-black/40 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[270px] h-[102px] bg-white pt-[20px] rounded-[15px]"
      >
        <div className="text-center text-black text-[17px] font-normal font-pretendard leading-snug mb-[15px] px-[16px]">
          {message}
        </div>
        <button
          className="h-11 w-full border-t border-[#808080]/60 text-[#007aff] font-bold text-[17px]"
          onClick={onClose}
        >
          확인
        </button>
      </div>
    </div>
  );
};
