export function trimClassName(className: string | undefined, ...styles: string[]): string {
  const allStyles = [className ?? '', ...styles].join(' ').trim();

  return allStyles;
}

export function calculatePriceYearly(basePrice: number | undefined, isYearly: boolean): string {
  const YEARLY_MULTIPLIER = 10;
  basePrice = basePrice ?? 0;

  return isYearly ? `$${basePrice * YEARLY_MULTIPLIER}/yr` : `$${basePrice}/mo`;
}
