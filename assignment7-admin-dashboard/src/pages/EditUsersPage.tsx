import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { FormEvent, useState } from 'react';
import CustomButton from '../UI/CustomButton';
import CustomForm from '../UI/CustomForm';
import CustomInput from '../UI/CustomInput';
import { emaiValidation } from '../consts';
import { ErrorsObject } from '../types/ErrorObject';

import { updateUser as updateUserArr } from '../service/users';
import { User } from '../types/User';

import { useTranslation } from 'react-i18next';

function EditUsersPage() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const { email, firstName } = state.user as User;
  const { updateUser } = useUserContext();
  const navigate = useNavigate();
  const [newFirstName, setNewFirstName] = useState<string>(firstName);
  const [newEmail, setNewEmail] = useState<string>(email);
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
      setNewFirstName(value);
      validateInput('firstName', value);
      !value.length
        ? setErrors((prev) => {
            return { ...prev, firstNameError: '' };
          })
        : null;
    }
    if (type === 'email') {
      setNewEmail(value);
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
      lastName: state.user.lastName,
      password: state.user.password,
      dob: state.user.dob,
      firstName: newFirstName,
      email: newEmail,
    };
    const response = await updateUserArr(state.user.id, newUser);
    if (response) updateUser({ ...state.user, ...newUser });

    navigate('/admin/users');
  };

  return (
    <div className="flex w-11/12 min-w-64 flex-col items-center py-10">
      <h3 className="mb-4 uppercase dark:text-[#FAF0E6]">{t('updateUser')}</h3>
      <CustomForm
        onSubmit={handleSubmit}
        className="flex w-6/12 flex-col gap-5"
      >
        <CustomInput
          value={newFirstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          placeholder={t('name')}
          error={errors.firstNameError}
          className="dark:bg-opasity-40 w-full rounded border border-stone-400 bg-stone-50 px-3 py-2 dark:bg-opacity-50 dark:placeholder:text-[#352f44]"
        />
        <CustomInput
          value={newEmail}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder={t('email')}
          type="email"
          error={errors.emailError}
          className="dark:bg-opasity-40 w-full rounded border border-stone-400 bg-stone-50 px-3 py-2 dark:bg-opacity-50 dark:placeholder:text-[#352f44]"
        />

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

export default EditUsersPage;
