// components/ValidationMessage.tsx
interface ValidationMessageProps {
  isValid: boolean;
  message: string;
}

export const ValidationMessage: React.FC<ValidationMessageProps> = ({
  isValid,
  message,
}) => (
  <div className="mt-[5px] flex pl-[10px] items-center gap-[10px]">
    {isValid ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
      >
        <path
          d="M7.67319 1.21948L3.00196 6.78047L1 4.55608"
          stroke="#007AFF"
          strokeWidth="1.16986"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <path
          d="M0.62277 7.25901C0.544161 7.18038 0.5 7.07374 0.5 6.96256C0.5 6.85137 0.544161 6.74473 0.62277 6.6661L3.29131 3.99757L0.62277 1.32903C0.546388 1.24995 0.504124 1.14403 0.505079 1.03408C0.506034 0.924138 0.550134 0.818969 0.627879 0.741224C0.705624 0.663479 0.810793 0.619379 0.920736 0.618424C1.03068 0.617469 1.1366 0.659733 1.21568 0.736115L3.88422 3.40465L6.55276 0.736115C6.63184 0.659733 6.73776 0.617469 6.8477 0.618424C6.95765 0.619379 7.06282 0.663479 7.14056 0.741224C7.21831 0.818969 7.26241 0.924138 7.26336 1.03408C7.26432 1.14403 7.22205 1.24995 7.14567 1.32903L4.47713 3.99757L7.14567 6.6661C7.22205 6.74518 7.26432 6.8511 7.26336 6.96105C7.26241 7.07099 7.21831 7.17616 7.14056 7.25391C7.06282 7.33165 6.95765 7.37575 6.8477 7.37671C6.73776 7.37766 6.63184 7.3354 6.55276 7.25901L3.88422 4.59048L1.21568 7.25901C1.13705 7.33762 1.03042 7.38178 0.919228 7.38178C0.80804 7.38178 0.701404 7.33762 0.62277 7.25901Z"
          fill="#E0302D"
        />
      </svg>
    )}
    <div
      className={`text-sm font-medium font-['Pretendard'] ${
        isValid ? "text-[#4f4f4f]" : "text-[#e0302d]"
      }`}
    >
      {message}
    </div>
  </div>
);
