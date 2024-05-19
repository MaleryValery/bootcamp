import { useNavigate } from 'react-router-dom';
import CustomButton from '../UI/CustomButton';
import CustomForm from '../UI/CustomForm';
import CustomInput from '../UI/CustomInput';
import { FormEvent, useState } from 'react';
import { createUser } from '../service/users';
import { useUserContext } from '../context/UserContext';
import { emaiValidation } from '../consts';
import { ErrorsObject } from '../types/ErrorObject';
import { useTranslation } from 'react-i18next';

function CreateUserPage() {
  const { t } = useTranslation();
  const { addUser } = useUserContext();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [errors, setErrors] = useState<ErrorsObject>({
    firstNameError: '',
    emailError: '',
    formError: '',
  });

  const validateInput = (
    type: 'firstName' | 'email',
    value: string
  ): boolean => {
    if (type === 'firstName' && value.length < 3) {
      setErrors((prev) => {
        return {
          ...prev,
          firstNameError: 'Invalid firstName format',
          formError: '',
        };
      });
      return false;
    } else if (type === 'firstName' && value.length > 2) {
      setErrors((prev) => {
        return { ...prev, firstNameError: '', formError: '' };
      });
      return true;
    }
    if (type === 'email' && !value.match(emaiValidation)) {
      setErrors((prev) => {
        return {
          ...prev,
          emailError: 'email is not valid',
          formError: '',
        };
      });
      return false;
    } else if (type === 'email' && value.match(emaiValidation)) {
      setErrors((prev) => {
        return { ...prev, emailError: '', formError: '' };
      });
      return true;
    }
    return false;
  };

  const handleChange = (type: 'firstName' | 'email', value: string): void => {
    if (type === 'firstName') {
      setFirstName(value);
      validateInput('firstName', value);
      !value.length
        ? setErrors((prev) => {
            return { ...prev, firstNameError: '' };
          })
        : null;
    }
    if (type === 'email') {
      setEmail(value);
      validateInput('email', value);
      !value.length
        ? setErrors((prev) => {
            return { ...prev, emailError: '' };
          })
        : null;
    }
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const isValue = firstName.length > 0 && email.length > 0;
    const isErrors = Object.values(errors).every((err) => err.length === 0);

    if (!isValue || !isErrors) {
      setErrors((prev) => {
        return { ...prev, formError: 'Invalid form data' };
      });
      return;
    }
    const newUser = {
      firstName: firstName,
      lastName: role,
      email: email,
      password: 'password',
      dob: new Date().toISOString(),
    };
    const response = await createUser(newUser);
    if ('id' in response) addUser({ ...newUser, id: response.id });

    navigate('/admin/viewUsers');
  };

  return (
    <div className="flex w-11/12 min-w-64 flex-col items-center py-10">
      <h3 className="mb-4 uppercase dark:text-[#FAF0E6]">
        {t('createANewUser')}
      </h3>
      <CustomForm
        onSubmit={handleSubmit}
        className="flex w-6/12 flex-col gap-5"
      >
        <CustomInput
          value={firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          placeholder={t('name')}
          error={errors.firstNameError}
          className="w-full rounded border border-stone-400 bg-stone-50 px-3 py-2 dark:bg-opacity-50 dark:placeholder:text-[#352f44]"
        />
        <CustomInput
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder={t('email')}
          type="email"
          error={errors.emailError}
          className="w-full rounded border border-stone-400 bg-stone-50 px-3 py-2 dark:bg-opacity-50 dark:placeholder:text-[#352f44]"
        />
        <select
          className="rounded bg-stone-50 p-2 dark:bg-opacity-50 "
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">{t('user')}</option>
          <option value="admin">{t('admin')}</option>
        </select>
        <CustomButton
          className="rounded-md bg-amber-200 px-3 py-2 uppercase text-stone-700 dark:bg-lime-200 dark:bg-opacity-80 dark:text-[#352f44]"
          title={t('submit')}
        />
      </CustomForm>
      {errors.formError.length > 0 && (
        <p className="text-center text-xs text-red-500">{errors.formError}</p>
      )}
    </div>
  );
}

export default CreateUserPage;
