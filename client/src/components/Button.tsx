import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  size: 'm' | 's' | 'xs';
  style: 'primary' | 'secondary' | 'tertiary' | 'text';
  text: string;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ size, type, style, text, disabled, onClick }: ButtonProps) => {
  const BUTTONSIZE = {
    xs: 'h-9 rounded-[1.125rem] px-3',
    s: 'h-11 rounded-[1.375rem] px-4',
    m: 'h-14 rounded-[1.75rem] px-4',
  };
  const BUTTONSTYLE = {
    primary: 'bg-primary-primary text-white',
    secondary: 'bg-white text-primary-primary border-primary-primary border-solid border',
    tertiary: 'bg-white text-grayscale-lightText border-grayscale-border border-solid border',
    text: 'bg-white text-primary-primary shadow-md',
  };
  return (
    <button
      type={type}
      className={twMerge('font-bm text-sm', BUTTONSIZE[size], BUTTONSTYLE[style])}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
