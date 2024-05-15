import CustomInput from '../UI/CustomInput';
import CustomForm from '../UI/CustomForm';
import CustomButton from '../UI/CustomButton';
import { FormEvent, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { login } from '../service/auth';
import { useNavigate } from 'react-router-dom';

type ErrorsObject = {
  nameError: string;
  passworError: string;
  formError: string;
};
function LoginPage() {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ErrorsObject>({
    nameError: '',
    passworError: '',
    formError: '',
  });

  const validateInput = (type: 'name' | 'password', value: string): boolean => {
    if (type === 'name' && value.length < 3) {
      setErrors((prev) => {
        return { ...prev, nameError: 'Invalid name format', formError: '' };
      });
      return false;
    } else if (type === 'name' && value.length > 2) {
      setErrors((prev) => {
        return { ...prev, nameError: '', formError: '' };
      });
      return true;
    }
    if (type === 'password' && value.length < 3) {
      setErrors((prev) => {
        return {
          ...prev,
          passworError: 'Password length should be more or equal 3',
          formError: '',
        };
      });
      return false;
    } else if (type === 'password' && value.length > 2) {
      setErrors((prev) => {
        return { ...prev, passworError: '', formError: '' };
      });
      return true;
    }
    return false;
  };

  const handleChange = (type: 'name' | 'password', value: string): void => {
    if (type === 'name') {
      setName(value);
      validateInput('name', value);
      !value.length
        ? setErrors((prev) => {
            return { ...prev, nameError: '' };
          })
        : null;
    }
    if (type === 'password') {
      setPassword(value);
      validateInput('password', value);
      !value.length
        ? setErrors((prev) => {
            return { ...prev, passworError: '' };
          })
        : null;
    }
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const isValue = name.length > 0 && password.length > 0;
    const isErrors = Object.values(errors).every((err) => err.length === 0);

    const admin = await login(name, password);

    if (!isValue || !isErrors || !admin) {
      setErrors((prev) => {
        return { ...prev, formError: 'Invalid form data' };
      });
      return;
    }

    handleLogin();
    navigate('/admin');
  };

  return (
    <div className="flex w-11/12 min-w-64 flex-col items-center py-10">
      <h3 className="mb-4">LOGIN</h3>
      <CustomForm
        onSubmit={handleSubmit}
        className="flex w-6/12 flex-col gap-5"
      >
        <CustomInput
          value={name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="name"
          error={errors.nameError}
          className="w-full rounded border border-stone-900 bg-stone-100 px-3 py-2"
        />
        <CustomInput
          value={password}
          onChange={(e) => handleChange('password', e.target.value)}
          placeholder="password"
          type="password"
          error={errors.passworError}
          className="w-full rounded border border-stone-900 bg-stone-100 px-3 py-2"
        />
        <CustomButton
          className="rounded-md bg-amber-200 px-3 py-2 uppercase text-stone-700"
          title="submit"
        />
      </CustomForm>
      {errors.formError.length > 0 && (
        <p className="text-center text-xs text-red-500">{errors.formError}</p>
      )}
    </div>
  );
}

export default LoginPage;
