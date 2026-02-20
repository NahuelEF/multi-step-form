import * as React from 'react';
import { FormData } from '@/validations';
import { useFormContext } from 'react-hook-form';
import style from './Switch.module.css';

interface SwitchProps {
  firstLabel: string;
  secondLabel: string;
  name: keyof FormData;
}

export const Switch = ({ name, firstLabel, secondLabel }: SwitchProps) => {
  const { register, watch } = useFormContext<FormData>();
  const reactId = React.useId();

  const firstId = `${reactId}-first-option`;
  const secondId = `${reactId}-second-option`;
  const selectedValue = watch(name);

  const isActive = (value: string): boolean => {
    return selectedValue === value.toLowerCase();
  };

  return (
    <div className={style.containter}>
      <label
        className={`${style.label} ${isActive(firstLabel) ? style.active : ''}`}
        htmlFor={firstId}
      >
        {firstLabel}
      </label>
      <div className={style.switch}>
        <span className={style.slider}></span>
        <input
          id={firstId}
          className={style.input}
          type='radio'
          value={firstLabel.toLowerCase()}
          {...register(name)}
        />
        <input
          id={secondId}
          className={style.input}
          type='radio'
          value={secondLabel.toLowerCase()}
          {...register(name)}
        />
      </div>
      <label
        className={`${style.label} ${isActive(secondLabel) ? style.active : ''}`}
        htmlFor={secondId}
      >
        {secondLabel}
      </label>
    </div>
  );
};
