import * as React from 'react';
import style from './RadioGroup.module.css';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  price: number | string;
  value: string;
  icon?: string;
  bonus?: string | false;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, price, value, icon, bonus, ...props }, ref) => (
    <label className={style.radio}>
      {icon && <img className={style.icon} src={icon} alt={`${label} icon`} />}
      <input ref={ref} className={style.input} type='radio' value={value} {...props} />
      <div className={style.details}>
        <strong>{label}</strong>
        <span className={style.price}>{`$${price}`}</span>
        {bonus && <span className={style.bonus}>{bonus}</span>}
      </div>
    </label>
  ),
);

Radio.displayName = 'Radio';
export { Radio };
