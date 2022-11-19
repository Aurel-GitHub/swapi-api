export const isValidLogin = (payload: string[]): boolean => {
  return payload.at(0) === 'Luke' && payload.at(1) === 'DadSucks';
};
