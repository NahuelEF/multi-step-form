import * as React from 'react';
import { trimClassName } from '@/utils';
import { FieldError } from 'react-hook-form';
import style from './TextField.module.css';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, id, className = '', type, error, ...props }, ref) => (
    <div className={style.field}>
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className={trimClassName(className, style.input, error ? style.error : '')}
        type={type || 'text'}
        {...props}
      />
      {error && (
        <span className={style.errorMessage} role='alert'>
          {error.message}
        </span>
      )}
    </div>
  ),
);

TextField.displayName = 'TextField';
export { TextField };
