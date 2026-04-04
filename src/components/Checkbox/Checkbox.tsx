import * as React from 'react';
import style from './Checkbox.module.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  description: string;
  price: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ title, description, price, ...props }, ref) => (
    <label className={style.container}>
      <input ref={ref} className={style.checkbox} type='checkbox' {...props} />
      <div className={style.info}>
        <strong className={style.title}>{title}</strong>
        <span className={style.description}>{description}</span>
      </div>
      <span className={style.price}>{`+${price}`}</span>
    </label>
  ),
);

Checkbox.displayName = 'Checkbox';
export { Checkbox };
