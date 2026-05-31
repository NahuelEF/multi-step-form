import { trimClassName } from '@/utils';
import style from './Sidebar.module.css';

interface SidebarItem {
  STEP_NUMBER: number;
  LABEL: string;
}

interface SidebarProps {
  items: SidebarItem[];
  activeStep: number;
}

export const Sidebar = ({ items, activeStep }: SidebarProps) => {
  return (
    <aside className={style.sidebar}>
      <ol className={style.steps}>
        {items.map(({ STEP_NUMBER, LABEL }) => (
          <li
            key={STEP_NUMBER}
            className={trimClassName(style.step, activeStep === STEP_NUMBER ? style.active : '')}
          >
            <p>
              <span className={style.stepNumber}>{`step ${STEP_NUMBER}`}</span>
              {LABEL}
            </p>
          </li>
        ))}
      </ol>
    </aside>
  );
};
