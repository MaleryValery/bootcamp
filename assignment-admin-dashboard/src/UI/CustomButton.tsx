import { ButtonHTMLAttributes } from 'react';

type ButtonType = {
  title: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function CustomButton({ title, ...rest }: ButtonType) {
  return <button {...rest}>{title}</button>;
}

export default CustomButton;
