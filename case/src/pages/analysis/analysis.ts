export type AnalysisTypeKeys =
  | 'general'
  | 'biochemistry'
  | 'urina'
  | 'bloodInfect';

export const anatysisType: Record<AnalysisTypeKeys, string> = {
  general: 'Загальний Аналіз Крові',
  biochemistry: 'Біохімічний Аналіз Крові',
  urina: 'Загальний Аналіз Сечі',
  bloodInfect: 'На Інфекційні Захворювання',
};
