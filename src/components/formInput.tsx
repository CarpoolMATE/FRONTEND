interface FormInputProps {
  label: string;
  value: string;
  error: boolean;
  placeholder: string;
  type?: string;
  maxLength?: number;
  onChange: (value: string) => void;
  onDuplicateCheck?: () => void;
  duplicate?: boolean;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
}
export const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  error,
  placeholder,
  type = "text",
  maxLength,
  onChange,
  onDuplicateCheck,
  duplicate,
  showPasswordToggle,
  onTogglePassword,
}) => {
  return (
    <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
      <div className="pl-[10px] text-[#4f4f4f] text-sm font-medium font-['Pretendard'] mt-[10px]">
        {label}
      </div>
      <div className="flex relative w-full">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={showPasswordToggle ? "text" : type}
          maxLength={maxLength}
          placeholder={placeholder}
          className={`
            w-full h-[51px] p-[15px] bg-white rounded-[10px]
            ${error ? "border border-[#e0302d]" : "border border-[#e9e9e9]"}
            placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard']
          `}
        />
        {onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                d="M13.771 10.2788L12.396 8.88281C12.632 8.09115 12.4513 7.42448 11.854 6.88281C11.257 6.34115 10.6112 6.18831 9.9165 6.42431L8.5625 5.07031C8.78483 4.94531 9.05567 4.84465 9.375 4.76831C9.69433 4.69198 10.0068 4.65381 10.3125 4.65381C11.3958 4.65381 12.3125 5.02881 13.0625 5.77881C13.8125 6.52881 14.1875 7.44548 14.1875 8.52881C14.1875 8.83415 14.1528 9.14315 14.0835 9.45581C14.0138 9.76815 13.9097 10.0425 13.771 10.2788ZM16.5835 13.1118L15.354 11.8618C15.9653 11.3898 16.507 10.869 16.979 10.2993C17.4513 9.72998 17.8125 9.13981 18.0625 8.52881C17.3542 7.02881 16.316 5.83431 14.948 4.94531C13.58 4.05631 12.0765 3.61181 10.4375 3.61181C9.9235 3.61181 9.39917 3.65698 8.8645 3.74731C8.32983 3.83765 7.90283 3.95231 7.5835 4.09131L6.1665 2.65381C6.70817 2.43148 7.3575 2.23698 8.1145 2.07031C8.8715 1.90365 9.632 1.82031 10.396 1.82031C12.521 1.82031 14.4515 2.42798 16.1875 3.64331C17.9235 4.85865 19.1943 6.48715 20 8.52881C19.6527 9.45915 19.1838 10.3098 18.5935 11.0808C18.0035 11.8515 17.3335 12.5285 16.5835 13.1118ZM17.1875 18.1953L13.625 14.6953C13.139 14.876 12.6112 15.0113 12.0415 15.1013C11.4722 15.1916 10.8958 15.2368 10.3125 15.2368C8.14583 15.2368 6.1875 14.6293 4.4375 13.4143C2.6875 12.199 1.41667 10.5705 0.625 8.52881C0.889 7.79248 1.2535 7.08415 1.7185 6.40381C2.18383 5.72315 2.74983 5.07031 3.4165 4.44531L0.896 1.92431L2.104 0.695312L18.354 16.9453L17.1875 18.1953ZM4.6875 5.71631C4.22917 6.10498 3.809 6.54598 3.427 7.03931C3.045 7.53231 2.74983 8.02881 2.5415 8.52881C3.24983 10.0425 4.302 11.2403 5.698 12.1223C7.09367 13.0043 8.6665 13.4453 10.4165 13.4453C10.7362 13.4453 11.0592 13.4245 11.3855 13.3828C11.7118 13.3411 11.9653 13.2856 12.146 13.2163L11.229 12.2578C11.104 12.2995 10.9617 12.3341 10.802 12.3618C10.6423 12.3898 10.4792 12.4038 10.3125 12.4038C9.24317 12.4038 8.33 12.0323 7.573 11.2893C6.816 10.546 6.4375 9.62581 6.4375 8.52881C6.4375 8.36215 6.45133 8.20231 6.479 8.04931C6.507 7.89665 6.54183 7.75081 6.5835 7.61181L4.6875 5.71631Z"
                fill="#505050"
              />
            </svg>
          </button>
        )}
        {onDuplicateCheck &&
          (value && duplicate ? (
            <button
              onClick={onDuplicateCheck}
              className="flex justify-center items-center cursor-pointer min-w-[80px] ml-[8px] h-[51px] px-3 py-2.5 bg-[#007aff] rounded-[10px] text-white"
            >
              중복확인
            </button>
          ) : duplicate ? (
            <div className="flex justify-center items-center ml-[8px] h-[51px] min-w-[80px] px-3 py-2.5 bg-[#c3c3c3] rounded-[10px] text-white">
              중복확인
            </div>
          ) : (
            <div className="flex justify-center items-center ml-[8px] h-[51px] min-w-[85px] px-3 py-2.5 bg-[#d4e8ff] rounded-[10px] border border-[#007aff]/20 text-[#007aff]">
              사용가능
            </div>
          ))}
      </div>
    </div>
  );
};
