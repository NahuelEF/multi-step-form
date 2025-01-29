export function trimClassName(className: string | undefined, ...styles: string[]): string {
  const allStyles = [className ?? '', ...styles].join(' ').trim();

  return allStyles;
}
