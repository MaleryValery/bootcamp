import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonType = {
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function CustomIconButton({ icon, ...rest }: ButtonType) {
  return <button {...rest}>{icon}</button>;
}

export default CustomIconButton;
