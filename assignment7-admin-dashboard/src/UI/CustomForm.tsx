import { ReactNode } from 'react';

type FormType = {
  children: ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

function CustomForm({ children, ...rest }: FormType) {
  return <form {...rest}>{children}</form>;
}

export default CustomForm;
