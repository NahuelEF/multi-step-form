import IconAdvanced from '@/assets/images/icon-advanced.svg';
import IconArcade from '@/assets/images/icon-arcade.svg';
import IconPro from '@/assets/images/icon-pro.svg';
import { FormData } from '@/validations';
import { useFormContext } from 'react-hook-form';
import { Form } from '@/components/Form/Form';
import { Radio } from '@/components/RadioGroup/RadioGroup';
import { Switch } from '@/components/Switch/Switch';
import { STEP_TWO } from '@/constants/texts.json';
import style from './PlanSelection.module.css';

const planIcons = {
  arcade: IconArcade,
  advanced: IconAdvanced,
  pro: IconPro,
};

export const PlanSelection = () => {
  const { register, watch } = useFormContext<FormData>();

  const billingCycle = watch('billingCycle');

  const isYearly = billingCycle === 'yearly';

  const calculatePrice = (basePrice: number) => {
    const yearlyMultiplier = 10;
    return isYearly ? basePrice * yearlyMultiplier : basePrice;
  };

  return (
    <>
      <Form.Header title={STEP_TWO.TITLE} description={STEP_TWO.DESCRIPTION} />
      <Form.Content>
        <div className={style.radiogroup}>
          {STEP_TWO.PLANS.map((plan) => (
            <Radio
              key={plan.ID}
              label={plan.TITLE}
              price={`${calculatePrice(plan.PRICE)}/${isYearly ? 'yr' : 'mo'}`}
              bonus={isYearly && '2 months free'}
              value={plan.VALUE}
              icon={planIcons[plan.VALUE as keyof typeof planIcons]}
              {...register('plan')}
            />
          ))}
        </div>
        <Switch firstLabel='Monthly' secondLabel='Yearly' name='billingCycle' />
      </Form.Content>
    </>
  );
};
