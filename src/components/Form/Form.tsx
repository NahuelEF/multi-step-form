import { trimClassName } from '@/utils';
import style from './Form.module.css';

interface SectionBase {
  children: React.ReactNode;
  className?: string;
}

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {};

export const Form = ({ children, className, ...props }: FormProps) => (
  <form className={trimClassName(className, style.form)} {...props}>
    {children}
  </form>
);

interface FormHeaderProps extends Omit<SectionBase, 'children'> {
  title: string;
  description: string;
}

const FormHeader = ({ title, description, className }: FormHeaderProps) => (
  <section className={trimClassName(className, style.formHeader)}>
    <h1 className={style.headerTitle}>{title}</h1>
    <p className={style.headerDescription}>{description}</p>
  </section>
);

type FormContentProps = SectionBase & {};

const FormContent = ({ children, className }: FormContentProps) => (
  <section className={trimClassName(className, style.formContent)}>{children}</section>
);

type FormFooterProps = SectionBase & {};

const FormFooter = ({ children, className }: FormFooterProps) => (
  <section className={trimClassName(className, style.formFooter)}>{children}</section>
);

Form.Header = FormHeader;
Form.Content = FormContent;
Form.Footer = FormFooter;
