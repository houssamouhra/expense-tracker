import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { type Expense } from '../App';
export type ExpenseFormData = z.infer<typeof schema>;

interface FormProps {
  onSubmit: (data: Expense) => void;
}

const schema = z.object({
  description: z.string().min(3, { message: 'Description must be at least 3 characters.' }),
  amount: z
    .number({ message: 'Amount only accept numbers.' })
    .min(1)
    .max(99, { message: 'Amount must be between 1 and 99' }),
  category: z.enum(['Groceries', 'Utilities', 'Entertainment'], {
    message: 'Please select a category.',
  }),
});

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema), mode: 'onChange' });

  const onSubmitHandler: SubmitHandler<ExpenseFormData> = (data) => {
    onSubmit({ ...data, id: crypto.randomUUID() });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input {...register('description')} id='description' type='text' className='form-control' />
        {errors.description && <p className='text-danger'>{errors.description.message}</p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id='amount'
          type='number'
          className='form-control'
        />
        {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select {...register('category')} name='category' id='category' className='form-select'>
          <option value=''></option>
          <option value='Groceries'>Groceries</option>
          <option value='Utilities'>Utilities</option>
          <option value='Entertainment'>Entertainment</option>
        </select>
        {errors.category && <p className='text-danger'>{errors.category.message}</p>}
      </div>

      <button disabled={!isValid} type='submit' className='btn btn-primary mb-5'>
        Submit
      </button>
    </form>
  );
};

export default Form;
