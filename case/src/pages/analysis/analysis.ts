export type AnalysisTypeKeys =
  | 'general'
  | 'biochemistry'
  | 'urina'
  | 'infections';

export const analysisType: Record<AnalysisTypeKeys, string> = {
  general: 'Загальний Аналіз Крові',
  biochemistry: 'Біохімічний Аналіз Крові',
  urina: 'Загальний Аналіз Сечі',
  infections: 'На Інфекційні Захворювання',
};
