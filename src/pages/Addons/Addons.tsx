import { calculatePriceYearly } from '@/utils';
import { FormData } from '@/validations';
import { useFormContext } from 'react-hook-form';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Form } from '@/components/Form/Form';
import { STEP_THREE } from '@/constants/texts.json';

export const Addons = () => {
  const { register, watch } = useFormContext<FormData>();

  const billingCycle = watch('billingCycle');
  const isYearly = billingCycle === 'yearly';

  return (
    <>
      <Form.Header title={STEP_THREE.TITLE} description={STEP_THREE.DESCRIPTION} />
      <Form.Content>
        {STEP_THREE.ADDONS.map((addOn) => (
          <Checkbox
            key={addOn.ID}
            title={addOn.NAME}
            description={addOn.DESCRIPTION}
            price={calculatePriceYearly(addOn.PRICE, isYearly)}
            value={addOn.VALUE}
            {...register('addOns')}
          />
        ))}
      </Form.Content>
    </>
  );
};
