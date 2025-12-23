import { useId } from 'react';
import { FormData } from '@/validations';
import { useFormContext } from 'react-hook-form';
import { Form } from '@/components/Form/Form';
import { TextField } from '@/components/TextField/TextField';
import { STEP_ONE } from '@/constants/texts.json';
import style from './PersonalInfo.module.css';

export const PersonalInfo = () => {
  const inputId = useId();

  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <>
      <Form.Header title={STEP_ONE.TITLE} description={STEP_ONE.DESCRIPTION} />
      <Form.Content className={style.inputs}>
        <TextField
          id={`${inputId}-userName`}
          label='Name'
          type='text'
          placeholder='e.g Stephen King'
          autoComplete='name'
          error={errors.name}
          {...register('name')}
        />
        <TextField
          id={`${inputId}-userEmail`}
          label='Email address'
          type='email'
          placeholder='e.g stephenking@lorem.com'
          autoComplete='email'
          error={errors.email}
          {...register('email')}
        />
        <TextField
          id={`${inputId}-userPhone`}
          label='Phone number'
          type='tel'
          placeholder='e.g. +1 234 567 890'
          autoComplete='tel'
          error={errors.phone}
          {...register('phone')}
        />
      </Form.Content>
    </>
  );
};
