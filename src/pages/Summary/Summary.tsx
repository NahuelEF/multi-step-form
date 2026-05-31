import { calculatePriceYearly } from '@/utils';
import { FormData } from '@/validations';
import { useFormContext } from 'react-hook-form';
import { Form } from '@/components/Form/Form';
import { STEP_FOUR, STEP_THREE, STEP_TWO } from '@/constants/texts.json';
import style from './Summary.module.css';

interface SummaryProps {
  changeData: () => void;
}

export const Summary = ({ changeData }: SummaryProps) => {
  const { watch } = useFormContext<FormData>();

  const selectedPlan = watch('plan');
  const selectedBillingCycle = watch('billingCycle');
  const selectedAddons = watch('addOns') || [];

  const isYearly = selectedBillingCycle === 'yearly';

  const planData = STEP_TWO.PLANS.find((plan) => plan.VALUE === selectedPlan);

  const addonData = STEP_THREE.ADDONS.filter((addon) =>
    selectedAddons.includes(addon.VALUE as (typeof selectedAddons)[number]),
  );

  const totalPrice = planData?.PRICE
    ? planData?.PRICE + addonData.reduce((total, addon) => total + addon.PRICE, 0)
    : 0;
  return (
    <>
      <Form.Header title={STEP_FOUR.TITLE} description={STEP_FOUR.DESCRIPTION} />
      <Form.Content>
        <table className={style.table}>
          <tbody className={style.tbody}>
            <tr className={style.trow}>
              <th className={style.theader}>
                {`${planData?.TITLE} (${selectedBillingCycle})`}
                <button className={style.changebtn} onClick={changeData}>
                  Change
                </button>
              </th>
              <td className={style.tdata}>{calculatePriceYearly(planData?.PRICE, isYearly)}</td>
            </tr>
            {addonData.map((addon) => (
              <tr className={style.trow} key={addon.VALUE}>
                <th className={style.theader}>{addon.NAME}</th>
                <td className={style.tdata}>{calculatePriceYearly(addon.PRICE, isYearly)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className={style.tfoot}>
            <tr>
              <th className={style.theader}>Total (per {isYearly ? 'year' : 'month'})</th>
              <td className={style.tdata}>{calculatePriceYearly(totalPrice, isYearly)}</td>
            </tr>
          </tfoot>
        </table>
      </Form.Content>
    </>
  );
};
