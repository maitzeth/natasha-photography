export const cn = (inputs: unknown[]) => {
  return inputs.filter(Boolean).join(' ');
}
