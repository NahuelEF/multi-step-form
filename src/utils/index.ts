export function trimClassName(className: string | undefined, ...styles: string[]): string {
  const allStyles = [className ?? '', ...styles].join(' ').trim();

  return allStyles;
}

export function calculatePriceYearly(basePrice: number, isYearly: boolean): string {
  const YEARLY_MULTIPLIER = 10;
  return isYearly ? `$${basePrice * YEARLY_MULTIPLIER}/yr` : `$${basePrice}/mo`;
}
