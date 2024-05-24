import { InputHTMLAttributes } from 'react';

type InputType = {
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function CustomInput({ error, ...rest }: InputType) {
  return (
    <label className="relative">
      <input {...rest} />
      {error && error?.length > 0 && (
        <p className="absolute text-xs text-red-500 ">{error}</p>
      )}
    </label>
  );
}

export default CustomInput;
