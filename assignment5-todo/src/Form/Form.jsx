import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import './Form.css';
function Form({ onAddTodo }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onChange' });

  const validateDate = (date) => {
    return new Date(date) >= new Date().getDate();
  };

  const handlerSubmit = (data) => {
    onAddTodo({
      ...data,
      done: false,
      id: uuidv4(),
    });
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(handlerSubmit)}>
      <div className="form__content">
        <input
          type="text"
          name="img"
          placeholder="add img url"
          {...register('img')}
        />
        <div className="content__box">
          <input
            type="text"
            name="title"
            placeholder="add new todo"
            {...register('title', { required: true, minLength: 3 })}
          />
          {errors?.title && (
            <p className="error-text">
              {errors?.title?.message || 'min length of title 3 letters'}
            </p>
          )}
        </div>

        <div className="content__box">
          <input
            type="date"
            name="date"
            {...register('date', {
              required: true,
              validate: validateDate,
            })}
          />
          {errors?.date && (
            <p className="error-text">
              {errors?.date?.message || 'date can not be in the past'}
            </p>
          )}
        </div>
      </div>
      <button disabled={!isValid}>➕</button>
    </form>
  );
}
export default Form;
