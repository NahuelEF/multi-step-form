import { trimClassName } from '@/utils';
import style from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  type,
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={trimClassName(className, style.button, style[variant])}
    type={type || 'button'}
    {...props}
  >
    {children}
  </button>
);
