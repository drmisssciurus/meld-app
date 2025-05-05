import React from 'react';
import { ReactElement } from 'react';

const icons = {
  arrowUp: (
    <svg
      height="24"
      width="24"
      viewBox="0 0 473.654 473.654"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <circle fill="currentColor" cx="236.827" cy="236.827" r="236.827" /> */}
      <path
        fill="#FFFFFF"
        d="M366.553,238.843c-35.885-35.889-71.766-71.77-107.651-107.655
        c-10.837-10.845-28.907-10.549-39.666,0.213c-35.885,35.881-71.77,71.77-107.651,107.655c-25.564,25.56,14.259,65.08,39.879,39.456
        c29.236-29.236,58.476-58.476,87.712-87.712c29.311,29.307,58.614,58.618,87.925,87.929
        C352.664,304.289,392.184,264.47,366.553,238.843z"
      />
    </svg>
  ),
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

function Icon({ name, className, size = 24 }: IconProps): ReactElement | null {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <span
      className={className}
      style={{ width: size, height: size, display: 'inline-block' }}
    >
      {React.cloneElement(icon, { width: size, height: size })}
    </span>
  );
}

export default Icon;
