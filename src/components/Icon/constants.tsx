export const ICONS = {
  CHEVRONS_LEFT: {
    svgOptions: {
      viewBox: '0 0 11 18',
      fill: 'none',
      stroke: 'currentColor',
    },
    icon: (
      <path
        d="M10 1.10938L1.82023 7.92585C1.39337 8.28157 1.39337 8.93718 1.82023 9.2929L10 16.1094"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
  },
};

export type IconsList = keyof typeof ICONS;

export type IconsType = {
  [key in IconsList]: {
    svgOptions?: {
      viewBox?: string;
    };
    icon: React.ReactNode;
  };
};

export default ICONS as IconsType;
