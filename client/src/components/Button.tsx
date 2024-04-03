import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonState = 'default'|'disabled'|'pressed';
type ButtonStyle = 'primary' | 'secondary' | 'tertiary' | 'text';

interface ButtonProps {
  size: 'm' | 's' | 'xs' | 'xxs';
  style: ButtonStyle;
  text: string;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ size, type, style, text, disabled, onClick }: ButtonProps) => {

  const [buttonState, setButtonState] = useState<ButtonState>('default');
  if (disabled && buttonState !== 'disabled'){
    setButtonState('disabled');
  }
  if (!disabled && buttonState === 'disabled') {
    setButtonState('default');
  }

  const BUTTONSIZE = {
    xxs: 'h-6 rounded-[1.125rem] px-5 whitespace-nowrap',
    xs: 'h-9 rounded-[1.125rem] px-3',
    s: 'h-11 rounded-[1.375rem] px-4',
    m: 'h-14 rounded-[1.75rem] px-4',
  };
  
  const BUTTON_STYLE:Record<ButtonState, Record<ButtonStyle,string>> = {
    default:{
    primary: 'bg-primary-primary text-white',
    secondary: 'bg-white text-primary-primary border-primary-primary border-solid border',
    tertiary: 'bg-white text-grayscale-lightText border-grayscale-border border-solid border',
    text: 'bg-white text-primary-primary shadow-md'
      },
    disabled:{
      primary: 'bg-grayscale-100 text-grayscale-400',
    secondary: 'bg-grayscale-50 text-grayscale-400 border-grayscale-100 border-solid border',
    tertiary: 'bg-grayscale-50 text-grayscale-400 border-grayscale-100 border-grayscale-border border-solid border',
    text: 'bg-grayscale-100 text-grayscale-400 shadow-md'
      },
    pressed:{
      primary: 'bg-grayscale-100 ',
      secondary: 'bg-grayscale-100 ',
      tertiary: 'bg-grayscale-100 ',
      text: 'bg-grayscale-100 '
    }
  };


  return (
    <button
      type={type}
      className={twMerge('font-bm text-sm', BUTTONSIZE[size], BUTTON_STYLE[buttonState][style])}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
